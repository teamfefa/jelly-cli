import {Command, flags} from '@oclif/command'
import * as execa from 'execa'
import * as Listr from 'listr'

export default class Card extends Command {
  static description = 'opens a card for development'

  static examples = [
    `$ jelly card 1337`,
  ]

  static flags = {
    setup: flags.boolean({char: 's'}),
  }

  static args = [
    {
      name: 'cardNumber',
      required: true,
      description: 'The card number from Trello'
    },
    {
      name: 'cardName',
      description: 'A short name to help remember what this card was, useful when looking back at all your git branches'
    },
  ]

  async run() {
    const {args, flags} = this.parse(Card)

    let branchName = `card-${args.cardNumber}`

    if (args.cardName) {
      branchName += `-${args.cardName}`
    }

    let gitTasks = [
      {
        title: 'Check git environment',
        task: () => {
          return new Listr([
            {
              title: 'Checking git branch',
              task: () => execa.stdout('git', ['rev-parse', '--abbrev-ref', 'HEAD']).then(result => {
                if (result !== 'master') {
                  throw new Error('Not on master branch. Please checkout master first.');
                }
              })
            },
            {
              title: 'Checking git status',
              task: () => execa.stdout('git', ['status', '--porcelain']).then(result => {
                if (result !== '') {
                  throw new Error('Unclean working tree. Commit or stash changes first.');
                }
              })
            },
            {
              title: 'Checking remote history',
              task: () => execa.stdout('git', ['rev-list', '--count', '--left-only', '@{u}...HEAD']).then(result => {
                if (result !== '0') {
                  throw new Error('Remote history differ. Please pull changes.');
                }
              })
            }
          ])
        }
      },
      {
        title: 'Create new branch',
        task: () => {
          return new Listr([
            {
              title: 'Creating new branch',
              task: () => execa.stdout('git', ['checkout', '-b', branchName])
            }
          ])
        }
      }
    ];

    let setupTasks = [
      {
        title: 'Install Ruby dependencies with Bundler',
        task: (ctx, task) => execa('bundle', ['install'])
      },
      {
        title: 'Install JS dependencies with Yarn',
        task: (ctx, task) => execa('yarn', ['install', '--check-files'])
          .catch(() => {
            ctx.yarn = false;

            task.skip('Yarn not available, install it via `npm install -g yarn`');
          })
      },
      {
        title: 'Setup development database',
        task: (ctx, task) => execa('rails', ['db:setup'])
      }
    ];

    let tasks = []

    tasks = tasks.concat(gitTasks)

    if (flags.setup) {
      tasks = tasks.concat(setupTasks)
    }

    new Listr(tasks).run().catch(err => {
      console.error(`\n\n${err}`);
    });
  }
}

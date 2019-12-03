import {Command, flags} from '@oclif/command'
import * as execa from 'execa'
import * as Listr from 'listr'

export default class Sync extends Command {
  static description = "sync your fork's master branch with upstream"

  static examples = [
    `$ jelly sync`,
  ]

  async run() {
    const {args, flags} = this.parse(Sync)

    const tasks = new Listr([
      {
        title: 'Checkout local master branch',
        task: (ctx, task) => execa('git', ['checkout', 'master'])
      },
      {
        title: 'Fetch upstream',
        task: (ctx, task) => execa('git', ['fetch', 'upstream'])
      },
      {
        title: 'Merge upstream master into local master',
        task: (ctx, task) => execa('git', ['merge', 'upstream/master'])
      },
      {
        title: 'Push to origin master',
        task: (ctx, task) => execa('git', ['push'])
      },
    ]);

    tasks.run().catch(err => {
      console.error(`\n\n${err}`);
    });
  }
}

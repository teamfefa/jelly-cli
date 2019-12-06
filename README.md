jelly-cli
=========

Your Personal Jellyfish

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/jelly-cli.svg)](https://npmjs.org/package/jelly-cli)
[![CircleCI](https://circleci.com/gh/teamfefa/jelly-cli/tree/master.svg?style=shield)](https://circleci.com/gh/teamfefa/jelly-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/jelly-cli.svg)](https://npmjs.org/package/jelly-cli)
[![License](https://img.shields.io/npm/l/jelly-cli.svg)](https://github.com/teamfefa/jelly-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g jelly-cli
$ jelly COMMAND
running command...
$ jelly (-v|--version|version)
jelly-cli/0.1.1 darwin-x64 node-v12.13.1
$ jelly --help [COMMAND]
USAGE
  $ jelly COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`jelly card CARDNUMBER [CARDNAME]`](#jelly-card-cardnumber-cardname)
* [`jelly hello [FILE]`](#jelly-hello-file)
* [`jelly help [COMMAND]`](#jelly-help-command)
* [`jelly sync`](#jelly-sync)

## `jelly card CARDNUMBER [CARDNAME]`

opens a card for development

```
USAGE
  $ jelly card CARDNUMBER [CARDNAME]

ARGUMENTS
  CARDNUMBER  The card number from Trello
  CARDNAME    A short name to help remember what this card was, useful when looking back at all your git branches

OPTIONS
  -s, --setup

EXAMPLE
  $ jelly card 1337
```

_See code: [src/commands/card.ts](https://github.com/teamfefa/jelly-cli/blob/v0.1.1/src/commands/card.ts)_

## `jelly hello [FILE]`

describe the command here

```
USAGE
  $ jelly hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ jelly hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/teamfefa/jelly-cli/blob/v0.1.1/src/commands/hello.ts)_

## `jelly help [COMMAND]`

display help for jelly

```
USAGE
  $ jelly help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_

## `jelly sync`

sync your fork's master branch with upstream

```
USAGE
  $ jelly sync

EXAMPLE
  $ jelly sync
```

_See code: [src/commands/sync.ts](https://github.com/teamfefa/jelly-cli/blob/v0.1.1/src/commands/sync.ts)_
<!-- commandsstop -->

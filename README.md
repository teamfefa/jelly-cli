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
jelly-cli/0.1.0 darwin-x64 node-v12.13.0
$ jelly --help [COMMAND]
USAGE
  $ jelly COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`jelly hello [FILE]`](#jelly-hello-file)
* [`jelly help [COMMAND]`](#jelly-help-command)

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

_See code: [src/commands/hello.ts](https://github.com/teamfefa/jelly-cli/blob/v0.1.0/src/commands/hello.ts)_

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
<!-- commandsstop -->

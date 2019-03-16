"use strict";

const shell = require('shelljs');
const chalk = require('chalk');

shell.echo(`Start Jest`);
shell.exec(`npm test`);
shell.echo(chalk.green(`Jest completed`));

shell.echo(`Clean lib folder`);
shell.rm(`-Rf`, `lib/`);
shell.echo(chalk.green(`Clean completed`));

shell.echo(`Start bundling`);
shell.echo(`Rollup package`);
if (shell.exec(`rollup -c`).code !== 0) {
    shell.echo(chalk.red(`Error: Rollup package failed`));
    shell.exit(1);
}

if (shell.exec(`rollup -c rollup.es.config.js`).code !== 0) {
    shell.echo(chalk.red(`Error: Rollup ES6 package failed`));
    shell.exit(1);
}

if (shell.exec(`tsc`).code !== 0) {
    shell.echo(chalk.red(`Error: Tsc failed`));
    shell.exit(1);
}

shell.echo(chalk.green(`End building`));
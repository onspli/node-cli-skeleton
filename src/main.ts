#!/usr/bin/env node

import { program } from 'commander';
import { Logger } from './Logger.js';
import { config } from 'dotenv';
import findConfig from 'find-config';
import { getGreeting } from './lib.js';

// search for .env file up the directory tree and load its contents as environment variables
config({ path: findConfig('.env') });

program
    .name('node-cli-skeleton')
    .option('-v, --verbose', 'verbose output')
    .option('-d, --debug', 'debug output')
    .hook('preAction', async (thisCommand, _actionCommand) => {
        const options: {
            verbose: boolean;
            debug: boolean;
        } = thisCommand.opts();

        if (options.verbose) {
            Logger.level = 'verbose';
        }
        if (options.debug) {
            Logger.level = 'debug';
        }

        Logger.debug(`initializing`);
    });

program
    .command('hello')
    .description('say hello')
    .argument('<name>', 'the name of the person you want to greet')
    .action(async (name: string) => {
        const greeting = getGreeting(name);
        process.stdout.write(`${greeting}\n`);
    });

let exitCode: number = 0;
try {
    await program.parseAsync();
} catch (err) {
    Logger.error(err);
    exitCode = 1;
} finally {
    Logger.debug(`terminating and cleaning up`);
}
process.exit(exitCode);

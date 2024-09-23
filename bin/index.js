#!/usr/bin/env node

import { Command } from 'commander';
import { todayCMD, startWorkCMD, rootCMD } from '../scripts/index.js';

const program = new Command();

program
  .name('cli-tool')
  .description('CLI to manage daily tasks and workspace')
  .version('0.1.0');

program
  .command('today')
  .description('Display current date and time')
  .action(todayCMD);

program
  .command('start-work')
  .description('Start work by opening today\'s todo file')
  .action(startWorkCMD);

program
  .command('root')
  .description('Open a new shell in the root directory')
  .action(rootCMD);

program.parse(process.argv);

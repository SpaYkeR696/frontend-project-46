#!/usr/bin/env node

import { Command } from 'commander';
import process from 'process';
import genDiff from '../src/genDiff.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.3')
  .option('-f, --format <type>', 'output format', 'styles')
  .argument('<filepath1>', 'first configuration file')
  .argument('<filepath2>', 'second configuration file')
  .action((filepath1, filepath2, options) => {
    const result = genDiff(filepath1, filepath2, options.format);
    console.log(result);
  });

program.parse(process.argv);

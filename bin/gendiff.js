#!/usr/bin/env node

import { program } from 'commander';
// eslint-disable-next-line import/no-unresolved
import genDiff from '../src/genDiff.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format <type>', 'output format')
  .action((firstConfig, secondConfig) => (
    console.log(genDiff(firstConfig, secondConfig, program.format))))
  .parse(process.argv);

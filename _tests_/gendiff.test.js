// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from '@jest/globals';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff.js';

const fileName = fileURLToPath(import.meta.url);
const dirname = path.dirname(fileName);
const fixturePath = (file) => path.join(dirname, '..', '_tests_/_fixtures_', file);

const resultExpect = (file) => fs.readFileSync(fixturePath(file), 'utf8').trim();

test.each([
  {
    file1: 'filepath1.json', file2: 'filepath2.json', format: 'json', expected: 'resultJson.txt',
  },
])('compare', ({
  file1, file2, format, expected,
}) => {
  expect(genDiff(fixturePath(file1), fixturePath(file2), format)).toBe(resultExpect(expected));
});

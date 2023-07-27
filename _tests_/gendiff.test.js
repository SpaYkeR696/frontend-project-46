// eslint-disable-next-line import/no-extraneous-dependencies
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
// eslint-disable-next-line import/no-unresolved
import { genDiff } from '../index.js';

const fileName = fileURLToPath(import.meta.url);
const dirname = path.dirname(fileName);
const fixturePath = (file) => path.join(dirname, '..', '_tests_/_fixtures_', file);

const resultExpect = (file) => fs.readFileSync(fixturePath(file), 'utf8').trim();

// eslint-disable-next-line no-undef
test.each([
  {
    file1: 'filepath1.json', file2: 'filepath2.json', format: undefined, expected: 'resultStyle.txt',
  },
  {
    file1: 'filepath1.json', file2: 'filepath2.json', format: 'plain', expected: 'resultPlain.txt',
  },
  {
    file1: 'filepath1.json', file2: 'filepath2.json', format: 'json', expected: 'resultJson.txt',
  },
  {
    file1: 'filepath1.yml', file2: 'filepath2.yml', format: undefined, expected: 'resultStyle.txt',
  },
  {
    file1: 'filepath1.yml', file2: 'filepath2.yml', format: 'json', expected: 'resultJson.txt',
  },
  {
    file1: 'filepath1.yml', file2: 'filepath2.yml', format: 'plain', expected: 'resultPlain.txt',
  },
])('compare', ({
  file1, file2, format, expected,
}) => {
  // eslint-disable-next-line no-undef
  expect(genDiff(fixturePath(file1), fixturePath(file2), format)).toBe(resultExpect(expected));
});

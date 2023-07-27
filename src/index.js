import fs from 'fs';
import path from 'path';
import { formats } from './utils/index.js';
import { parse } from './parse.js';
import compare from './genDiff.js';

const getData = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8').trim();
  const fileName = path.extname(filePath).slice(1);
  return parse(fileContent, fileName);
};

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const fileContent1 = getData(filePath1);
  const fileContent2 = getData(filePath2);
  const stylish = formats(compare(fileContent1, fileContent2), format);
  return stylish;
};

// eslint-disable-next-line import/prefer-default-export
export default genDiff;

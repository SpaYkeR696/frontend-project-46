import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import { formats } from './utils/index.js';
import { parse } from './parse.js';

const compare = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const sortedKey = _.sortBy(_.union(keys1, keys2));

  const result = sortedKey.map((key) => {
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { key, type: 'nested', children: compare(data1[key], data2[key]) };
    }
    if (!Object.hasOwn(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }
    if (!Object.hasOwn(data2, key)) {
      return { key, type: 'deleted', value: data1[key] };
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key, type: 'changed', value1: data1[key], value2: data2[key],
      };
    }
    return { key, type: 'unchanged', value: data1[key] };
  });
  return result;
};

const getData = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8').trim();
  const fileName = path.extname(filePath).slice(1);
  return parse(fileContent, fileName);
};

const genDiff = (filePath1, filePath2, format = 'stylish') => formats(compare(getData(filePath1), getData(filePath2)), format);

export default genDiff;

import _ from 'lodash';
import fs from 'fs';
import path from 'path';

// eslint-disable-next-line import/prefer-default-export
export const diffTree = (before, after) => {
  const fileKeys = _.union(_.keys(before), _.keys(after));
  const result = fileKeys.map((key) => {
    if (!_.has(after, key)) {
      return { key, status: 'deleted', value: before[key] };
    }
    if (!_.has(before, key)) {
      return { key, status: 'added', value: after[key] };
    }
    const oldValue = before[key];
    const newValue = after[key];
    if (oldValue === newValue) {
      return { key, status: 'unmodified', value: oldValue };
    }
    if (_.isObject(oldValue) && _.isObject(newValue)) {
      return { key, status: 'merged', children: diffTree(oldValue, newValue) };
    }
    const node = {
      key,
      status: 'modified',
      oldValue,
      newValue,
    };
    return node;
  });
  return result;
};

const parse = (type, data) => {
  switch (type) {
    case 'json':
      return JSON.parse(data);
    default:
      throw new Error(`Unknown data type! ${type} is not supported!`);
  }
};

const render = (tree, format) => {
  switch (format) {
    case 'json':
      return JSON.stringify(tree);
    default:
      return tree;
  }
};

const fileData = (file) => {
  const data = fs.readFileSync(path.resolve(file), 'utf-8');
  const type = _.trim(path.extname(file), '.');
  return { data, type };
};

const genDiff = (filePath1, filePath2, format) => {
  const before = fileData(filePath1);
  const after = fileData(filePath2);

  const parseBefore = parse(before.type, before.data);
  const parseAfter = parse(after.type, after.data);

  const diff = diffTree(parseBefore, parseAfter);
  const result = render(diff, format);

  return result;
};

export default genDiff;

import stylish from './stylish.js';
import plain from './plain.js';

const formats = (fileDiff, formatType) => {
  switch (formatType) {
    case 'plain':
      return plain(fileDiff);
    case 'json':
      return JSON.stringify(fileDiff);
    case 'stylish':
      return stylish(fileDiff);
    default:
      throw new Error(`Unknown format: ${formatType}`);
  }
};

// eslint-disable-next-line import/prefer-default-export
export { formats };

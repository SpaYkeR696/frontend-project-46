import styles from './style.js';

const formats = (fileDiff, formatType) => {
  switch (formatType) {
    case 'json':
      return JSON.stringify(fileDiff);
    case 'styles':
      return styles(fileDiff);
    default:
      throw new Error(`Unknown format: ${formatType}`);
  }
};

// eslint-disable-next-line import/prefer-default-export
export { formats };

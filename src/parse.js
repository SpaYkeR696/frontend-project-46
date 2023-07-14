import yaml from 'js-yaml';

const parse = (fileContent, format) => {
  switch (format) {
    case 'yml':
    case 'yaml': return yaml.load(fileContent);
    default: return JSON.parse(fileContent);
  }
};

// eslint-disable-next-line import/prefer-default-export
export { parse };

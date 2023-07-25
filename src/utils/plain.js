const stringify = (data) => {
  if (data instanceof Object) {
    return '[complex value]';
  }
  return typeof data === 'string' ? `'${data}'` : data;
};

const plain = (dataDiff) => {
  const inner = (data, path = '') => {
    const pointData = path === '' ? '' : `${path}.`;
    const result = data.map((item) => {
      switch (item.type) {
        case 'added':
          return `Property '${pointData}${item.key}' was added with value: ${stringify(item.value)}`;
        case 'deleted':
          return `Property '${pointData}${item.key}' was removed`;
        case 'changed':
          return `Property '${pointData}${item.key}' was updated. From ${stringify(item.value1)} to ${stringify(item.value2)}`;
        case 'nested': {
          const newPath = `${pointData}${item.key}`;
          return `${inner(item.children, newPath)}`;
        }
        case 'unchanged':
          return null;
        default:
          throw new Error(`Unknown item type: '${item.type}'!`);
      }
    }, '');
    return result.filter((item) => item).join('\n');
  };
  return `${inner(dataDiff).trim()}`;
};

export default plain;

const isObject = (obj: any) => {
  return obj && obj.constructor === Object;
};

const replaceValue = (value: any, newValue: any): any => {
  if (Array.isArray(value) && Array.isArray(newValue)) {
    return newValue.map((val: any, i: number) => {
      return replaceValue(value[i], val);
    });
  } else if (isObject(value) && isObject(newValue)) {
    return mergeObjects(value, newValue);
  }
  return newValue;
};

const mergeObjects = (obj: any, ...sources: any) => {
  for (let source of sources) {
    for (let key in source) {
      if (source[key] == null) continue;
      obj[key] = replaceValue(obj[key], source[key]);
    }
  }
  return obj;
};

export default mergeObjects;

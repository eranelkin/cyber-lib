import mergeObject from "./mergeObject";

// FIX: add 'th to the day
const getPDFFormatedDate = () => {
  const options: any = { year: "numeric", month: "long", day: "2-digit" };
  const dt = new Intl.DateTimeFormat("en-US", options);
  return dt.format(new Date());
};

const getFormatedNumber = (num: any) => {
  console.log('first')
  return new Intl.NumberFormat().format(num);
};

const isNum = (val: any) => {
  return !isNaN(val);
};

const cloneDeep = (source: any) => {
  if (typeof source !== "object" || source === null) throw "illegal value";
  let copy: any = Array.isArray(source) ? [] : {};

  for (let key in source) {
    if (typeof source[key] === "object" && source[key] !== null) {
      copy[key] = cloneDeep(source[key]);
    } else {
      copy[key] = source[key];
    }
  }
  return copy;
};

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const mergeArrayObjects = (arr1: object[], arr2: object[]) => {
  return arr1.map((item, i) => {
    let curr = arr2.find((i) => Object.keys(i)[0] === Object.keys(item)[0]);
    if (!!curr) {
      return {
        [Object.keys(item)[0]]: [
          ...Object.values(item)[0],
          ...Object.values(curr)[0],
        ],
      };
    }
    return item;
  });
};

export {
  getPDFFormatedDate,
  isNum,
  getFormatedNumber,
  cloneDeep,
  mergeObject,
  getRandomHexColor,
  mergeArrayObjects,
};

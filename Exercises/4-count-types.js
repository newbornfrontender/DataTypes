'use strict';

const f = () => console.log('hello');
const arr = [
  true,
  'User',
  f,
  2,
  false,
  null,
  'Str',
  undefined,
  26817637698172938123,
  { a: '123' },
  false,
  ['1', 2, null],
];

const isArr = value => Array.isArray(value) && 'array';
const isNull = value => value === null && 'null';

const countTypesInArray = arr => {
  const keys = {};

  for (const item of arr) {
    const type = isArr(item) || isNull(item) || typeof item;
    const key = keys[type] || 0;

    keys[type] = key + 1;
  }

  return keys;
};

console.log(countTypesInArray(arr));

// const countTypesInArray = arr => {
//   const keys = {};

//   for (const item of arr) {
//     const type = typeof item;
//     const key = keys[type] || 0;

//     keys[type] = key + 1;
//   }

//   return keys;
// };


module.exports = { countTypesInArray };

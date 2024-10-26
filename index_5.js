// Задание 6.6.5
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = Object.values(obj);

console.log(arrValues[2].map(elem=>arrValues.splice(-2, 0, elem)));
arrValues.splice(-2, 1);
console.log(arrValues);
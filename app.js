const prices = [[2, 4], [3, 4], [10, [20, 50]]];

const res = prices.flat(2);
console.log(res);
const res2 = prices.flatMap(el => el.concat('!'));
console.log(res2);

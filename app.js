const prices = [[100, 200], [120, 100], [200, 350]];
console.log(prices);

const negativePrices = prices
.map(product => product[1] - product[0])
.filter(price => price > 0)
;

console.log(negativePrices);
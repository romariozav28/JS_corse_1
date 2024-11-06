let balance = 1000;
let bonus = 100;
let isBanned = false;
let isExist = false;
let isSelling = true;

const canBuy = (balance>1000 || bonus>100) && !isBanned && !isExist && isSelling;

console.log(canBuy ? 'Можно купить' : 'Нельзя купить');

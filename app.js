function logName(name, surname) {
    console.log(`Меня зовут ${name} ${surname}`);
}

logName('Крокс', 'Петров');


function countDepositSum (depositInUSD, month, rate) {
    return depositInUSD * (1 + rate/100/12) ** month;
}

const example1 = countDepositSum(1000, 24, 12);
console.log(example1);

console.log(countDepositSum(1000, 48, 10));
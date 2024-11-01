const rate = 7;
const startBalance = 12000;
const endBalance = 14000;
const period = 2;

let balance = startBalance * ((1 + rate / 12 / 100) ** (period * 12));
if (balance > endBalance) {
    console.log(`Покупка состоится
Остаток средств: ${balance - endBalance}`);
} else {
    console.log('Покупка не состоится (((');
}
//Приоритеты

//сравнение и арифметика
const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);

//группировка (скобки)
const a = (6 + 10) / 2;
console.log(a);

//ассоциативность(слева направо или наоборот)
let b;
let c;
c = b = 100 + 50;
console.log(c);
console.log(b);
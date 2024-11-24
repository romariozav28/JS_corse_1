const users = ['Вася', 'Маша', 'Катя', 'Аня'];
console.log(users);
users.sort();
console.log(users);

const operations = [100, -300, -100, 50, 480];
console.log(operations);

operations.sort((a, b) => a - b);
console.log(operations);

operations.sort((a, b) => b - a);
console.log(operations);
const userName = 'Вася aka Terminator Пупкин';

const firstName = userName.slice(0, userName.indexOf(' '));
const lastName = userName.slice(userName.lastIndexOf(' ')+1);
console.log(firstName, lastName);



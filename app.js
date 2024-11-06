console.log('Вася' || 'Олег');
console.log(false || 'Олег');
console.log('Вася' || false);
console.log(false || false);
console.log(true || 'Олег');
console.log('Вася' || true);

console.log('Вася' && 'Олег');
console.log(false && 'Олег');
console.log('Вася' && false);
console.log(false && false);
console.log(true && 'Олег');
console.log('Вася' && true);

let a = 'Марина';
const userName = a || 'Петя';
console.log(userName);

const isAdmin = false;
const fileName = isAdmin && 'file.mp4';
console.log(fileName);

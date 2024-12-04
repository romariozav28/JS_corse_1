'use strict'


//console.log(a); - выведет ошибку
console.log(b);// b будет undefind
const a = 3;
var b = 2;
console.log(a);// ошибки не будет так как вызов после объявления
console.log(b);// b будет со значением 2

addUser();//можно функцию вызвать и до объявления
function addUser(){
    //console.log('User added');
}
addUser();//можно функцию вызвать и после объявления, лучше после

//arr1();//- ошибка вызов стрелочной функции до объявления переменная const,
//так же будет и с var, так как var при вызове до объявления undefined
const arr1 = () => {
    console.log('arr1');
};
arr1();//вызов функции после объявления const

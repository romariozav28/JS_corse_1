'use strict';

//console.log(this);

function addNum(num1, num2){
    console.log(this);
    return num1 + num2;
}

const addNum2 = (num1, num2) => {
    console.log(this);
    return num1 + num2;
};

const user = {
    name: 'Вася',
    surname: 'Пупкин',
    getFullName: function(){
        console.log(this);
        return this.name + ' ' + this.surname;
    }
};
user.getFullName();

const user2 = {
    name: 'Марина',
    surname: 'Катц'
}
user2.getFullName = user.getFullName;
user2.getFullName();

console.log(user.getFullName());
console.log(user2.getFullName());

const getFullName = user2.getFullName();


console.log(addNum2(2, 3));
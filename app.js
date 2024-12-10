'use strict';

function removePassword(reset){
    if(reset){
        this.password = undefined;
    } else {
        this.password = '1';
    }
}

const user = {
    name: 'Иван',
    surname: 'Иванов',
    age: 24,
    password: '1'
}
console.log(user);

const removeUserPass = removePassword.bind(user);
removeUserPass(true);
console.log(user);

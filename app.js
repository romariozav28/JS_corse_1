'use strict'

const user = {
    name: 'Иван',
    roles: []
};

function addRole(){
    const role = 'test';
    user.roles.push(role);
    let successMessage = 'Ура';
    //const role = 'test'; - ошибка, переменная объявлена и присвоена после использования
    console.log(successMessage);
}

addRole();
console.log(user);
'use strict'

const successMessage = 'Успех';
const user = {
    name: 'Вася',
    roles: []
};

function addRole(user, role){
    if(role == 'Admin'){
        const message = 'Ошибка';
        console.log(message);
        return user;
    }
    user.roles.push(role);
    console.log(successMessage);

    function logRoles(){
        console.log(user.roles);
    }
    logRoles();
    return user;
}

console.log(addRole(user, 'User'));
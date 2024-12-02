'use strict';

const user = {
    name: 'Anton',
    id: 1,
    roles: ['Admin']
};

/* const newUser = Object.assign({}, user);
user.name = 'NewUser';
 */
const newUser2 = {
    ...user 
};
newUser2.name = 'newUser';
newUser2.roles.push('User');

console.log(user);
console.log(newUser2);
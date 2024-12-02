'use strict';

let firstname = 'Anton';
let firstname2 = firstname;
firstname = 'New';

console.log(firstname);
console.log(firstname2);

const user1 = {
    name: 'Anton'
};

const user2 = user1;
user2.name = 'New';
console.log(user1);
console.log(user2);
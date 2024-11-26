const users = [
    {
        name: 'Вася',
        surname: 'Пупкин',
        age: 30,
        skills: ['Разработка', 'DevOps']
    },
    {
        name: 'Катя',
        surname: 'Белова',
        age: 18,
        skills: ['Дизайн']
    }
];

const userData = users.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        skillNum: user.skills.length
    };
});

users.forEach(el => {
    el['fullName'] = `${el['name']} ${el['surname']}`;
    el['skills'] = el.skills.length;
    delete el.name;
    delete el.age;
    delete el.surname;
});
console.log(users);
console.log(userData);
let user = {
    name: 'Вася',
    age: 40,
    city: 'Moscow'
}

const {age, ...userWithoutAge} = user;
console.log(age);
console.log(userWithoutAge);

const additionalData = {
    skills: ['Разработка', 'Дизайн'],
    creditCard: '2343-9876-9034-6745'
};

//добавление новых свойств объекта работет даже если исходный объект как константа
/* user.skills = additionalData.skills;
user.creditCard = additionalData.creditCard;
console.log(user); */

//добавление свойства - работает даже если исходный объект как константа
//user.test = 'ljasbvnkadjn';

//работает только если исходный объект let
user = {
    ...user, //взяли все из объекта user
    ...additionalData //взяли все из объекта additionalData
}
console.log(user);
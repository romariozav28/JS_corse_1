'use strict';

const user = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 20,
    getUserInfo: function(){
        console.log(this);
        console.log(`${this.name} + ${this.surname}`);
        const canDrink = () => {
            if(this.age >= 18){
                console.log('Может уже пить');
            } else {
                console.log('Не может еще пить');
            }
        };
        canDrink();
    },
    getUserInfoArrow:() => {
        console.log(`${this.name} ${this.surname}`);
    }
};

user.getUserInfo();
user.getUserInfoArrow();
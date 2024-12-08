'use strict';

const audi = {
    make: 'Audi',
    model: 'A3',
    year: 2021,
    damages: [],
    addDamage(part, rate){
        console.log(
            `У авто ${this.make} ${this.model} ${this.year} добавлено: повреждение ${part} со степенью ${rate}`
        );
        this.damages.push({
            part,
            rate
        });
    }
};

//audi.addDamage('Бампер', 10);

const bmw = {
    make: 'BMW',
    model: 'X5',
    year: 2022,
    damages: []
}

//bmw.addDamage = audi.addDamage;
//bmw.addDamage('Капот, 5');

const addDamageFunc = audi.addDamage;

addDamageFunc.call(bmw, 'Бампер', 2);
addDamageFunc.call(audi, 'Капот', 10);

addDamageFunc.apply(bmw, ['Бампер', 2]);
addDamageFunc.apply(audi, ['Капот', 10]);
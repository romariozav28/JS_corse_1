'use strict';

const audi = {
    make: 'Audi',
    model: 'A3',
    damages: []
};

const carManipulation = {
    addDamage(part, rate){
        this.damages.push({part, rate});
        console.log(`Добавить повреждение на ${this.make} ${this.model}`)
    }
}

const addDamageAudi = carManipulation.addDamage.bind(audi);
addDamageAudi('Крыло', 3);
console.log(audi);

const addDamageAudiRoof = carManipulation.addDamage.bind(audi, 'Крыша');
addDamageAudiRoof(5);
addDamageAudiRoof(2);
console.log(audi);
const warehouse = {
    goods: [],

    findGoodById: function (id) {
        return this.goods.find(g => g.id == id)
        },

    addGood: function (good) {
        const existGood = this.findGoodById(good.id)
        if(existGood) {
            console,log('Этот товар уже есть на складе');
        }
        this.goods.push(good);
    },
    getWeightKg: function () {
        return this.goods.reduce((acc, el) => 
        acc += el.weight?.kg ? el.weight.kg : 0,
    0)
    }
};

const car = {
    id: 1,
    weight: {
        kg: 100
    },
    brand: 'Ford'
};
const chair = {
    id: 2,
    weight: {
        kg: 2
    }
};
const paper = {
    id: 3,
    color: 'red'
};

warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse);
console.log(warehouse['goods']);
console.log(warehouse.findGoodById(4));

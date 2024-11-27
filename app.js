const cities = {
    msk: {
        let: 200,
        temp: 25
    },
    spb: {
        let: 100,
        temp: 20
    }
};

let sumTemp = 0;
let citiesCount = 0;
for(const key in cities){
    sumTemp += cities[key].temp;
    citiesCount++;
}
console.log(sumTemp/citiesCount);

let sumTemp2 = 0;
let citiesCount2 = Object.keys(cities).length;
for(const key of Object.keys(cities)){
    sumTemp2 += cities[key].temp;
}
console.log(sumTemp2/citiesCount2);
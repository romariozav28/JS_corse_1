const userData = ['Антон', 18, 'Москва'];

function getData() {
    return ['Антон', 18, 'Москва'];
}

const [userName, _, city] = userData;

console.log(userName, city);
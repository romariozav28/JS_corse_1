const secretNumber = '7';

if(secretNumber === 7) {
    console.log('Угадал строго');
}

//преведение типа чтобы выполнилось строгое равенство
if(Number(secretNumber) === 7) {
    console.log('Угадал строго');
}

if(secretNumber == 7) {
    console.log('Угадал не строго');
}
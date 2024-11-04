const a = prompt('Введите сумму 7 + 15');

//console.log(a === '15' ? 'Успех' : a === 'Я не робот' ? 'Успех' : 'вы робот');

switch(true) {
    case a === '15':
    case a === 'Я не робот':
        console.log('Успех');
        break;
    default:
        console.log('Вы робот');
}
const role = 'admin';

switch(role) {
    case 'manager':
        console.log('Менеджер');
        break;
    case 'admin':
        console.log('Админ');
        break;
    case 'ceo':
        console.log('СЕО');
        break;
    default:
        console.log('Мы тебя не знаем');
}

switch(role) {
    case 'manager':
    case 'admin':
        console.log('не руководитель');
        break;
    case 'ceo':
        console.log('Руководитель');
        break;
    default:
        console.log('Мы тебя не знаем');
}

const num = 0;
switch(true) {
    case num > 0:
        console.log('Положительное');
        break;
    case num < 0:
        console.log('Отрицательное');
        break;
    default:
        console.log('Ноль');
}
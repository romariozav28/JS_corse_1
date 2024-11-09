const age = 23;
const isActive = false;
const cash = 1900;


function isCredit(age, isActive) {
    return age > 24 ? isActive ? 500 : 100 : 0;
}

function isBuy(age, isActive, cash){
    const credit = isCredit(age, isActive);
    return (credit + cash) >= 2000 ? 'Может купить' : 'Не может купить';
}

console.log(isBuy(age, isActive, cash));
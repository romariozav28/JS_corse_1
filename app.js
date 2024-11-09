function canAccesWebsite(age){
    if(age < 18) {
        return false;
    }
    return true;
}
console.log(canAccesWebsite(18));

const cAw = (age) => age>=18;
console.log(cAw(17));
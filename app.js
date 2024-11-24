const arr = [1, 4, 4, 10, 20];

function some(array, number){
    let flag = false;
    for(let i = 0; i < array.length; i++){
        if(array[i] === number){
            flag = true;
            break;
        }
    }
    return flag;
}

function some_find(array, number){
    let flag = array.find(element => element === number);
    if (flag != undefined) {
        return true;
    } else {
        return false;
    }
}

function some_find1(array, number){
    let flag = Boolean(array.find(element => element === number));
    return flag;
}

function some_find2(array, number){
    let flag = array.find(element => element === number);
    return flag != undefined ? true : false;
}

console.log(some(arr, 4));
console.log(some_find(arr, 4));
console.log(some_find1(arr, 0));
console.log(some_find2(arr, 4));
console.log(arr.includes(4));
console.log(arr.some(el => el === 4));
const arr = [1, 4, 4, 10];

const avg = arr.reduce((acc, number, index, array) => {
    if(index != array.length - 1){
        return acc += number;
    } else {
        acc += number;
        return acc/array.length;
    }
    
}, 0)

console.log(avg);
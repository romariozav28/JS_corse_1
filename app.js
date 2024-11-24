const operations = [100, 20, 7, 30, 50];

let balance = 0;
for(const operation of operations){
    balance += operation;
    
}
console.log(balance);

const finalBalance = operations.reduce((acc, operation, i) => {
    console.log(`Итерация ${i}, acc: ${acc}, operation ${operation}`)
    return acc += operation;
}, 0);
console.log(finalBalance);

const minElement = operations.reduce((acc, element) => {
    if(element > acc){
        return acc;
    } else return element; 
});

console.log(minElement);
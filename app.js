/* function power(pow){
    return function(num){
        return num**pow;
    }
}

const powerOfTwo = power(2);
console.log(powerOfTwo(5));
console.log(powerOfTwo(10));

const powerOfThree = power(3);
console.log(powerOfThree(5));

console.log(power(5)(4)); */

const res = pow => num => num**pow;
console.log(res(5)(2));
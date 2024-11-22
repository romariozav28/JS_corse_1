const transactionInUSD = [10, -7, 50, -10, 100];

const transactionInRUB = [];
for(const transaction of transactionInUSD) {
    transactionInRUB.push(transaction * 60);
}
console.log(transactionInRUB);

const transactionInRUB2 = transactionInUSD.map((transaction, i) => {
    console.log(`${i}: ${transaction * 60} `);
    return transaction * 60;
})
console.log(transactionInRUB2);
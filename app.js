const operations = [1000, -700, 300, -500, 10000];
const startBalance = 100;

function endBalance(startBalance, operations) {
    let endBalance = startBalance;
    for (let element of operations) {
        endBalance += element;
    }
    console.log(`Итоговый баланс составил ${endBalance}$`);
}

function stageBalance(startBalance, operations){
    let stageBalance = startBalance;
    let operationCount = 0;
    for (let element of operations) {
        stageBalance += element;
        operationCount ++;
        if(stageBalance<0){
            console.log(`При совершении ${operationCount} операции баланс стал отрицательным`);
        }
    }
}

function profit(operations){
    let profit = 0;
    let profitCount = 0;
    let cost = 0;
    let costCount = 0;
    for (let element of operations){
        if (element < 0){
            cost += element;
            costCount++;
        } else {
            profit += element;
            profitCount++;
        }
    }
    console.log(`Средний доход составляет: ${profit/profitCount}$
Средний расход составляет: ${cost/costCount}$`)
}

endBalance(startBalance, operations);
stageBalance(startBalance, operations);
profit(operations);


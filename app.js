const wallet = {
    balance: 0,
    operations: [],
    operation: function(reason, sum){
        if(this.balance + sum < 0 ) {
            console.log(`Операция по ${reason} на сумму ${sum} не выполнена. Недостаточно средств`);
        } else {
        this.operations.push({'reason': reason, 'sum': sum});
        console.log(`Операция по ${reason} на сумму ${sum} выполнена успешно`);
        return this.balance += sum;
        }
    },
    countOperations: function(){
        return this.operations.length;
    }
};

wallet.operation('Получение выигрыша', 200);
wallet.operation('Уплата налогов', -100);
console.log(wallet);
console.log(wallet.countOperations());
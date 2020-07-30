// challenge 1-4
//https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-4-aplicacao-operacoes-bancarias.md

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };

// adicionar uma transação
function createTransaction(transaction) {
                        //or ({type, value})
    if(transaction.type == "credit"){
        user.balance = user.balance + transaction.value;
    } else {
        user.balance = user.balance - transaction.value;
    }

    user.transactions.push(transaction);
                        // or ({type, value})
}

// relatórios
function getHigherTransactionByType(type) {
    let valueList = [];
    for (let i = 0; i < user.transactions.length; i++) {
        if (user.transactions[i].type == type) {
            valueList.push(user.transactions[i].value); 
        } 
    }
    
    //console.log(valueList);
    const value = Math.max(...valueList);
    //return { credit, debit};
    return console.log({type, value});
}

function getAverageTransactionValue() {
    let totalValue = 0;
    for (let i = 0; i < user.transactions.length; i++) {
        totalValue += user.transactions[i].value;       
    }
    const avarageValue = totalValue / user.transactions.length;
    //return avarageValue;
    return console.log(avarageValue);
}

function getTransactionsCount() {
    let credit = 0;
    let debit = 0;
    for (let i = 0; i < user.transactions.length; i++) {
        if (user.transactions[i].type == "credit") {
            credit ++;
        } else {
            debit ++;
        }        
    }
    //return { credit, debit};
    return console.log({ credit, debit});
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }

// Rocketseat way
// // Adicionar transações
// function createTransaction(transaction) {
//     user.transactions.push(transaction)

//     if (transaction.type === 'credit') {
//         user.balance = user.balance + transaction.value
//     } else {
//         user.balance = user.balance - transaction.value
//     }
// }

// // Relatórios
// function getHigherTransactionByType(type) {
//     let higherTransaction
//     let higherValue = 0

//     for (let transaction of user.transactions) {
//         if (transaction.type == type && transaction.value > higherValue) {
//             higherValue = transaction.value
//             higherTransaction = transaction
//         }
//     }

//     return higherTransaction
// }

// function getAverageTransactionValue() {
//     let sum = 0

//     for(let transaction of user.transactions) {
//         sum += transaction.value
//     }

//     return sum / user.transactions.length
// }

// function getTransactionsCount() {
//     let count = {
//         credit: 0,
//         debit: 0,
//     }
//     for (let transaction of user.transactions) {
//         if (transaction.type === 'credit')
//             count.credit++
//         else
//             count.debit++
//     }

//     return count
// }




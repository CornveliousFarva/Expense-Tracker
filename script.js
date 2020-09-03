const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
    {id: 1, text:'Jersey', amount: -100},
    {id: 2, text:'Salary', amount: 900},
    {id: 3, text:'Book', amount: -20},
    {id: 4, text: 'TV', amount: 200}
];

let transactions = dummyTransactions;

//Add transactions to DOM list
function addTransactionDOM(transaction){
    //Get sign
    const sign = transaction.amount < 0 ? '-' : '+'
    //transaction = object, amount = property
    const item = document.createElement('li');

    //Add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')

    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn>X</button>
    `;

    list.appendChild(item);
}

//Update balance, income, and expense
function updateValues(){
    const amounts = transaction.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item ), 0) .toFixed(2);

    console.log(total)
}

//Init app
function init(){
    list.innerHTML= '';

    transactions.forEach(addTransactionDOM);
}
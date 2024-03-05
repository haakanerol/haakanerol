
// Selectors
const btnAdd = document.getElementById('btnAdd');
const inputIncome = document.getElementById('inputIncome');
const incomeTd = document.querySelector('.income');
const expensesTd = document.querySelector('.expenses');
const restTd = document.querySelector('.rest');

const expensesForm = document.getElementById('expensesForm');
const dateInput = document.getElementById('inputDate');
const expensesInput = document.getElementById('inputExpens');
const expensesType = document.getElementById('inputType');

const expensesBody = document.getElementById('expensesBody');
const btnReset = document.getElementById('reset');


// Variables
let totalIncome = 0;
let totalExpenses = 0;
let totalRest = 0;
let expensesList = [];


// Event Handlers
btnAdd.addEventListener('click', ()=>{
    totalIncome += Number(inputIncome.value);
    inputIncome.value = '';
    localStorage.setItem('totalIncome', totalIncome);
});


expensesForm.addEventListener('submit', (e)=>{
  
    e.preventDefault();
    const newExpense = {
        date: dateInput.value,
        type: expensesType.value,
        amount: expensesInput.value,
        id: new Date().getTime()
    }
    expensesList.push(newExpense);
    localStorage.setItem('expensesList', JSON.stringify(expensesList));
    expensesForm.reset();
    dateInput.value = '';
    console.log(expensesList);
  
});



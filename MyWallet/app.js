
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

btnAdd.disabled = true;
// Event Handlers
inputIncome.addEventListener('input', ()=>{
    if (inputIncome.value.trim() !== '') {
        btnAdd.disabled = false;
    } 
});
btnAdd.addEventListener('click', ()=>{
    
    totalIncome += Number(inputIncome.value);
    inputIncome.value = '';
    localStorage.setItem('totalIncome', totalIncome);
    incomeTd.textContent = totalIncome;
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
    setExpensesDom(newExpense)
    expensesForm.reset();
    dateInput.valueAsDate = new Date();
    calcTotal();
  
});

expensesBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash-can')) {
        e.target.parentNode.parentNode.remove();
        expensesList = expensesList.filter(expense => expense.id != e.target.id);
        localStorage.setItem('expensesList', JSON.stringify(expensesList));
        calcTotal();
    }
})

btnReset.addEventListener('click', ()=>{
    if(confirm('Are you sure you want to reset?')){
        expensesList = [];
        localStorage.removeItem('expensesList');
        localStorage.removeItem('totalIncome');
        localStorage.removeItem('totalExpenses');
        localStorage.removeItem('totalRest');
        totalIncome = 0
        totalExpenses = 0
        totalRest = 0
        expensesBody.innerHTML = '';
        calcTotal();
    }

});

window.addEventListener('load',()=>{
    totalIncome = Number(localStorage.getItem('totalIncome')) || 0;
    expensesList = JSON.parse(localStorage.getItem('expensesList')) || [];
    expensesList.foreach(expens => setExpensesDom(expens));
    incomeTd.textContent = totalIncome;
    calcTotal();
})

// Functions

const setExpensesDom = ({date, type, amount, id})=>{

    const tr = document.createElement('tr');

    const appendTd = (content)=>{
        const td = document.createElement('td');
        td.textContent = content;
        return td;
    }

    const addTrashTd  = () => {

        const td = document.createElement('td');
        const trash = document.createElement('i');
        trash.classList.add('fa', 'fa-trash-can', 'text-warning');
        trash.type = 'button';
        trash.id = id;
        td.appendChild(trash);
        return td;

    };

    tr.append(
        appendTd(date),
        appendTd(type),
        appendTd(amount),
        addTrashTd()
    )
    expensesBody.append(tr);
    
    };

    const calcTotal = () => {
        const spendings = expensesList.reduce((acc, curr) => 
             acc + Number(curr.amount), 0);

        incomeTd.textContent = totalIncome;
        expensesTd.textContent = spendings;
        restTd.textContent = totalIncome - spendings;
        if(restTd.textContent < 0){
            restTd.classList.add('text-danger');
        }

    };

 

  
   
    



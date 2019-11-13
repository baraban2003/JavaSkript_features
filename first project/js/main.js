'use strict';

//Получить кнопку "Начать расчет" через id
let buttonStartCalc = document.getElementById('start'),

    //Получить все блоки в правой части программы через классы (которые имеют класс название-value)
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];

//поля(input) c обязательными расходами через класс
let expenses = document.getElementsByClassName('data')[0];
let expensesItem = document.getElementsByClassName('expenses-item');


//Получить кнопки “Утвердить” и “Рассчитать” через Tag
let expensesItemBtn = document.getElementsByTagName('button')[0];
let optionalExpensesBtn = document.getElementsByTagName('button')[1];
let countBudgetBtn = document.getElementsByTagName('button')[2];

//Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optionaEexpensesItems = document.querySelectorAll('.optionalexpenses-item');

//Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

//console.log(checkSavings);

//efects when you choose button
buttonStartCalc.addEventListener('mouseenter', function () {
    buttonStartCalc.style.boxShadow = '5px 5px silver';
});
buttonStartCalc.addEventListener('mouseout', function () {
    buttonStartCalc.style.boxShadow = 'none';
});

//enter date and budget
let answerTime, answerMoney;
buttonStartCalc.addEventListener('click', function () {
    answerTime = prompt("Enter date in the next format YYYY-MM-DD или что хочешь", '2019-11-07');
    appData.timeData = answerTime;

    answerMoney = +prompt("Your mounth budget (US Dollars)?", "50000");
    while (isNaN(answerMoney) || answerMoney == "" || answerMoney == null) {
        answerMoney = +prompt("Your mounth budget(US Dollars)?", "5000");
    }
    appData.budget = answerMoney;

    budgetValue.textContent = answerMoney.toFixed();

    yearValue.value = new Date(Date.parse(answerTime)).getFullYear();
    yearValue.style.textAlign = "center";
    yearValue.style.padding = "0px";
    monthValue.value = new Date(Date.parse(answerTime)).getMonth()+1;
    monthValue.style.textAlign = "center";
    monthValue.style.padding = "0px";
    dayValue.value = new Date(Date.parse(answerTime)).getDate();
    dayValue.style.textAlign = "center";
    dayValue.style.padding = "0px";
});

//Введите обязательные расходы

expensesItemBtn.addEventListener('click', function(event){
    if (appData.budget == null) {  
        event.preventDefault(alert('Please tup the main botton "Начать расчет"')); 
    } else {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if (((typeof (a)) === "string") && ((typeof (a)) != null) && ((typeof (b)) != null) &&
            (a != "") && (b != "") && (a.length < 50) && (isNaN(b) === false)) {
            appData.Expenses[a] = b;
            sum += +b;
        } else {
            alert('Please, would you fill all fields?');
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
}
});



//Введите необязательные расходы
optionalExpensesBtn.addEventListener('click', function(event){
    if (appData.budget == null) {  
        event.preventDefault(alert('Please tup the main botton "Начать расчет"')); 
    } else {
        for (let i = 0; i < optionaEexpensesItems.length; i++) {
            let opt = optionaEexpensesItems[i].value;
                      appData.optionalExpenses[i] = opt;
                      optionalExpValue.textContent += appData.optionalExpenses[i] + " ";
              
         }
        }   
});

// Расчет дневного бюджета
countBudgetBtn.addEventListener('click', function(event){
    if (appData.budget == null) {  
        event.preventDefault(alert('Please tup the main botton "Начать расчет"')); 
    } else {
    if (appData.budget != undefined) {
     
    appData.oneDayBudget = ((appData.budget - +daybudgetValue.textContent) / 30).toFixed();
    daybudgetValue.textContent = appData.oneDayBudget;

    if (appData.oneDayBudget < 10) {
        levelValue.textContent = "Poor guy";
    } else if (appData.oneDayBudget >= 10 && appData.oneDayBudget <= 100) {
        levelValue.textContent = "You can fill better";
    } else if (appData.oneDayBudget > 100 && appData.oneDayBudget <= 1000) {
        levelValue.textContent = "You krasavchic";
    } else {
        levelValue.textContent = "You are millioner";
    }
} else {
    daybudgetValue.textContent = "Произошла ошибка";
    levelValue.textContent = "Нажмите кнопку - 'Начать расчет'";
}
    }
});

//Есть ли накопления: 
savings.addEventListener('click', function(event){
    if (appData.budget == null) {  
        event.preventDefault(alert('Please tup the main botton "Начать расчет"')); 
    } else {
    if (appData.savings == true)
        {
            appData.savings = false;
    }else {
            appData.savings = true;
    }
console.log(appData.savings);
    }
});


//Введите статьи возможного дохода через запятую
chooseIncome.addEventListener('change', function(){
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomValue.textContent = appData.income;
    });

//Есть ли накопления: 
chooseSum.addEventListener('input', function(){
    if (appData.savings == true) {
        let save = +chooseSum.value;
        let percent= +choosePercent.value;

        appData.monthIncome = (save * percent / 100 / 12).toFixed(1);
        appData.yearIncome = (save * percent / 100).toFixed();

        monthsavingsValue.textContent = appData.monthIncome;
        yearsavingsValue.textContent = appData.yearIncome;
    }
});
choosePercent.addEventListener('input', function(){
    if (appData.savings == true) {
        let save = +chooseSum.value;
        let percent= +choosePercent.value;
        appData.monthIncome = (save * percent / 100 / 12).toFixed(1);
        appData.yearIncome = (save * percent / 100).toFixed();

        monthsavingsValue.textContent = appData.monthIncome;
        yearsavingsValue.textContent = appData.yearIncome;
    }
});

//объект из третьего задания
let appData = {
    budget: answerMoney,
    timeData: answerTime,
    Expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
  };
//appData.chooseIncome();
// for (let key in appData) {
//    console.log("Наша программа включает в себя данные: " + key + " " + appData[key]);
// }
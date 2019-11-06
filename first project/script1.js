'use strict';
//выполняю 2-е задание - создать 2 переменные (money и time)
var answerMoney = prompt("Your mounth budget?", "1000");
console.log(answerMoney);
let answerTime = prompt("Enter date in the next format YYYY-MM-DD", 'YYYY-MM-DD');
console.log(answerTime);

//вопросы из четвертого задания - 4) Задать пользователю по 2 раза вопросы:
var firstQuation = prompt("What you want buy in this month?", "");
var secondQuation = prompt("How much it will cost?","");
var newExpenses = {
    Expenses: firstQuation +" : " +secondQuation
};

var newoptionalExpenses = {
    
};

var newIncome = [];

var isSayving = false;

//объект из третьего задания
var appData = {
   Budget : answerMoney,
   timeData : answerTime,
   Expenses : newExpenses,
   optionalExpenses: newoptionalExpenses,
   income : newIncome,
   savings : isSayving

};

//one day budget calculation
console.log(appData);
var oneDayBudget = alert ("You budget for one 1 day: " + appData.Budget/12);
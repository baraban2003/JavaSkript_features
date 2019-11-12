'use strict';

let answerMoney, answerTime;

//запрашиваю у пользователя дату и бюджет на месяц
function start() {
   answerMoney = +prompt("Your mounth budget (US Dollars)?", "5000");
   answerTime = prompt("Enter date in the next format YYYY-MM-DD или что хочешь", '2019-11-07');
   while (isNaN(answerMoney) || answerMoney == "" || answerMoney == null) {
      answerMoney = +prompt("Your mounth budget(US Dollars)?", "5000");
   }

}
//start();

//объект из третьего задания
let appData = {
   Budget: answerMoney,
   timeData: answerTime,
   Expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false,
   chooseExpenses: function () {
      for (let i = 0; i < 2; i++) {
         let a = prompt("What you want buy in this month? ", "");
         b = +prompt("How much it will cost?", "");

         if (((typeof (a)) === "string") && ((typeof (a)) != null) && ((typeof (b)) != null) &&
            (a != "") && (b != "") && (a.length < 50) && (isNaN(b) === false)) {
            appData.Expenses[a] = b;
            'use strict';         } else {
            alert("You enter not valid symbols");
            i--;
         }
      }
   },
   detectDayBudge: function () {
      let oneDayBudget = appData.Budget / 30;
      alert("You budget for one 1 day: " + Math.round(oneDayBudget));
   },
   // Вывод уровня достатка
   detectLeve: function () {
      if (oneDayBudget < 10) {
         alert("Poor guy");
      } else if (oneDayBudget >= 10 && oneDayBudget <= 100) {
         alert("You can fill better");
      } else if (oneDayBudget > 100 && oneDayBudget <= 1000) {
         alert("You krasavchic");
      } else {
         alert("You are millioner");
      }
   },
   //спросим есть ли сбережения, если есть меняем на true
   askDeposit: function () {
      let ask = prompt("do you have deposit on your accaunt?", "Yes");
      if (ask == "Yes") {
         appData.savings = true;
      } else {
         appData.savings = false;
      }
   },
   checkSavings: function () {
      if (appData.savings == true) {
         let save = +prompt("Какова сумма накоплений на вашем счете?"),
            percent = prompt("Под какой процент у вас депозит?");

         appData.monthIncome = save * percent / 100 / 12;
         alert("Доход от депозита в месяц - " + appData.monthIncome.toFixed(2));

      } else {
         alert("Иди попробуй заработать денег и положить на депозит");
      }
   },
   chooseOptExpenses: function () {
      for (let i = 1; i < 4; i++) {
         let a = prompt("Статья необязательных расходов?");

         if (((typeof (a)) === "string") && ((typeof (a)) != null) &&
            (a != "") && (a.length < 50)) {
            appData.optionalExpenses[i] = a;
         } else {
            alert("You enter not valid symbols");
            i--;
         }
      }
   },
   chooseIncome: function () {
      let items = prompt('Введите источники доп дохода (Нужно перечислить через запятую)', '');
      while ((typeof (items) !== 'string') || (items == "") || (items == null)) {
         items = prompt('Введите источники доп дохода (Нужно перечислить через запятую)', '');
      }

      appData.income = items.split(', ' || "," || ' ');
      while (true) {
         items2 = prompt('Something else, maybe you forgot something?', 'No');
         appData.income.push(items2);
         if (items2 == "No" || items2 == null || items2 == "") {
            appData.income.pop();
            break;
         }
      }
      appData.income.forEach(function (item, i) {
         alert("Способы доп. заработка: " + (i + 1) + " " + item);
      });
   }

};
//appData.chooseIncome();
// for (let key in appData) {
//    console.log("Наша программа включает в себя данные: " + key + " " + appData[key]);
// }

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
let answerMoney, answerTime;

//запрашиваю у пользователя дату и бюджет на месяц
function start() {
   answerMoney = +prompt("Your mounth budget (US Dollars)?", "5000");
   answerTime = prompt("Enter date in the next format YYYY-MM-DD или что хочешь", '2019-11-07');
   while (isNaN(answerMoney) || answerMoney == "" || answerMoney == null) {
      answerMoney = +prompt("Your mounth budget(US Dollars)?", "5000");
   }

}
start();



//объект из третьего задания
let appData = {
   Budget: answerMoney,
   timeData: answerTime,
   Expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false

};

//функция для запроса целейпокупки намесяц
function chooseExpenses() {
   for (let i = 0; i < 2; i++) {
      let a = prompt("What you want buy in this month? ", "");
      b = +prompt("How much it will cost?", "");

      if (((typeof (a)) === "string") && ((typeof (a)) != null) && ((typeof (b)) != null) &&
         (a != "") && (b != "") && (a.length < 50) && (isNaN(b) === false)) {
         appData.Expenses[a] = b;
      } else {
         alert("You enter not valid symbols");
         i--;
      }
   }
}
chooseExpenses();

// one day budget calculation
console.log(appData);

let oneDayBudget;

function detectDayBudge() {
   oneDayBudget = appData.Budget / 30;
   alert("You budget for one 1 day: " + Math.round(oneDayBudget));
  }
detectDayBudge();

// Вывод уровня достатка
function detectLevel() {
   if (oneDayBudget < 10) {
      alert("Poor guy");
   } else if (oneDayBudget >= 10 && oneDayBudget <= 100) {
      alert("You can fill better");
   } else if (oneDayBudget > 100 && oneDayBudget <= 1000) {
      alert("You krasavchic");
   } else {
      alert("You are millioner");
   }
}
detectLevel();

//спросим есть ли сбережения, если есть меняем на true
function askDeposit() {
   let ask = prompt("do you have deposit on your accaunt?", "Yes");
   if (ask == "Yes") {
      appData.savings = true
   } else {
      appData.savings = false;
   }
}
askDeposit();
console.log(appData.savings);

function checkSavings() {
   if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений на вашем счете?"),
         percent = prompt("Под какой процент у вас депозит?");

      appData.monthIncome = save * percent / 100 / 12;
      alert("Доход от депозита в месяц - " + appData.monthIncome.toFixed(2));

   } else {
      alert("Иди попробуй заработать денег и положить на депозит");
   }
}
checkSavings();

function chooseOptExpenses() {
   for (let i=1; i<4; i++) {
     let a = prompt("Статья необязательных расходов?");
     
     if (((typeof (a)) === "string") && ((typeof (a)) != null) &&
     (a != "") && (a.length < 50)) {
     appData.optionalExpenses [i] = a;
  } else {
     alert("You enter not valid symbols");
     i--;
  }
   }
}
chooseOptExpenses();
console.log(appData.optionalExpenses);
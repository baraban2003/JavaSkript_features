'use strict';
//выполняю 2-е задание - создать 2 переменные (money и time)
let answerMoney = +prompt("Your mounth budget?", "5000");
console.log(answerMoney);
let answerTime = prompt("Enter date in the next format YYYY-MM-DD", '2019-11-07');
console.log(answerTime);

//объект из третьего задания
let appData = {
   Budget: answerMoney,
   timeData: answerTime,
   Expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false

};

//вопросы из четвертого задания - 4) Задать пользователю по 2 раза вопросы:

for (let i = 0; i < 2; i++) {
   let a = prompt("What you want buy in this month?", " "),
      b = +prompt("How much it will cost?", " ");
   
   if(((typeof(a)) === "string") && ((typeof(a)) != null) && ((typeof(b)) != null) &&
   (a != "") && (b != "") && (a.length < 50) ) {
      appData.Expenses[a] = b;
   } else{
         alert("You enter not valid symbols");
        i--;
   }
}


// while (true) {
//    let i = 0;
//    i++;
   
//       let a = prompt("What you want buy in this month?", " "),
//          b = +prompt("How much it will cost?", " "),
//          c = prompt("What you want buy in this month?", " "),
//          d = +prompt("How much it will cost?", " ");
//    if(((typeof(a)) === "string") && ((typeof(a)) != null) && ((typeof(b)) != null) &&
//    (a != "") && (b != "") && (a.length < 50) && ((typeof(c)) === "string") && ((typeof(c)) != null) && 
//    ((typeof(d)) != null) &&   (c != "") && (d != "") && (c.length < 50) ) {
//       appData.Expenses[a] = b;
//       appData.Expenses[c] = d;
//       break;
// } else {
//    continue;
// }
// }

// one day budget calculation
console.log(appData);
let oneDayBudget = appData.Budget / 30;
if (oneDayBudget < 10) {
   console.log("Poor guy");
} else if (oneDayBudget >=10 && oneDayBudget <= 100) {
   console.log("You can fill better"); 
} else if (oneDayBudget >100 && oneDayBudget <= 1000) {
   console.log("You krasavchic"); 
} else {
   console.log("You are millioner"); 
}
alert("You budget for one 1 day: " + Math.round(oneDayBudget) );

console.log(Math.round(oneDayBudget));
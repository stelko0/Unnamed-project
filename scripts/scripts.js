function currentDay() {
  const now = new Date();
  const dayOfYear = (date) =>
    Math.floor(
      (date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
    );
  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  document.getElementById('daysCounter').innerText = 'Day ' + day + ' from 365';
  console.log(
    '%c Follow me in Instagram -> stelko0u',
    'background: #222; color: #bada55; font-size: 30px',
  );
}
currentDay();




///

///



// let cash = 1000;
// let cash = 999999999;

// let lose = 1;
// let win = 0;
// let sorry = 1;

// function casino(betMoney) {
//   let bet = Number(document.getElementById('betMoney').value);
//   line = Math.ceil(Math.random() * 1000);

//   if (bet <= 0) {
//     document.getElementById('error').innerHTML = `Insert your bet!`;
//     return;
//   } else {
//     document.getElementById('error').innerHTML = ``;
//   }
//   if (cash <= 0) {
//     document.getElementById('error').innerHTML = `You don't have money!`;
//     return;
//   }
//   if (bet > cash) {
//     document.getElementById('error').innerHTML = `You don't have enough money!`;
//     return;
//   }
//   if(lose % 15 == 0){
//     line = 777;
//   }
//   line = Math.ceil(Math.random() * 1000);
//   while (line < 100 || line > 999) {
//     line = Math.ceil(Math.random() * 1000);
//   }
//   console.log(line);
//   line = line.toString();
//   console.log(typeof line);
//   document.getElementById('number1').innerHTML = line[0];
//   document.getElementById('number2').innerHTML = line[1];
//   document.getElementById('number3').innerHTML = line[2];

//   if (line == 777) {
//     win++;
//     cash += 100 * bet;
//     document.getElementById('cash').innerHTML = `You have ${cash}$`;
//     cash = updateCash(cash);
//     document.getElementById('winOrLose').innerHTML = `JACKPOT!!! ${
//       100 * bet
//     }$.`;
//     return;
//   }

//   if (
//     line == 111 ||
//     line == 222 ||
//     line == 333 ||
//     line == 444 ||
//     line == 555 ||
//     line == 666 ||
//     line == 888 ||
//     line == 999
//   ) {
//     win++;
//     cash += Math.ceil(1.55 * bet);
//     document.getElementById('winOrLose').innerHTML = `* You win! +${Math.ceil(
//       Number(bet * 1.55)
//     )}$.`;
//     cash = updateCash(cash);
//   } else {
//     lose++;
//     cash -= bet;
//     cash = updateCash(cash);
//     document.getElementById('winOrLose').innerHTML = `* Try Again! -${bet}$`;
//   }
//   cash = updateCash(cash);
//   document.getElementById('cash').innerHTML = `You have ${cash}$`;
//   document.getElementById(
//     'counts'
//   ).innerHTML = `Wins ${win}  Loses ${lose}  Sorry ${sorry}.`;
//     line = Math.ceil(Math.random() * 1000);
  
// }

// document.getElementById('error').innerHTML = `Insert your bet!`;
// document.getElementById('error').innerHTML = `You don't have money!`;
// casino();
// // line = updateNumbers(temp);
// document.getElementById('number1').innerHTML = 0;
// document.getElementById('number2').innerHTML = 0;
// document.getElementById('number3').innerHTML = 0;
// document.getElementById('winOrLose').innerHTML = ``;

// function updateCash(k) {
//   if (cash != 100) {
//     return cash;
//   } else {
//     return cash;
//   }
// }

// // let first = Math.ceil(Math.random() * 120);
// // let second = Math.ceil(Math.random() * 120);
// function math() {
//   let first = 2;
//   let second = 2;
//   document.getElementById('first').innerHTML = first;
//   document.getElementById('second').innerHTML = second;
//   let result = document.getElementById('result').value;
//   let sum = first + second;
//   if (result == sum) {
//     first = Math.ceil(Math.random() * 120);
//     second = Math.ceil(Math.random() * 120);
//     cash += 100;
//     cash = updateCash(cash);

//     console.log('win');
//     console.log(cash);
//   }
//   document.getElementById('cash').innerHTML = `You have ${cash}$`;
// }
// math();
// cash = updateCash(cash);

// check();

function register(){
  let password = document.querySelector('#password').value;
  // let confirmPassword = document.getElementById('confirmPassword').value;

  if(password.length < 8){
    document.getElementById('regSucc').innerHTML = ``;
    document.getElementById('regError').innerHTML = `Your password is short!`;
  } else {
    document.getElementById('regError').innerHTML = ``;
    document.getElementById('regSucc').innerHTML = 'Your password is good!';
  }

  // if(password != confirmPassword){
  //   document.getElementById('regError').innerHTML = `Your password same`;
  // }
}

// '%c Follow me in Instagram -> stelko0u',
    // 'background: #222; color: #bada55; font-size: 30px',
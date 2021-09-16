let cash = 1000;
let line;
let win = 0;
let lose = 0;
function casino(betMoney) {
  let bet = Number(document.getElementById('betMoney').value);
  if (bet > cash) {
    document.getElementById('error').innerHTML = `You don't have enough money!`;
    return;
  }
  line = Math.ceil(Math.random() * 1000);
  if (line > 100 && line < 120) {
    console.log(line);
    while (line != 444|| line != 555 || line != 666 || line != 888) {
      line = Math.ceil(Math.random() * 1000);
      if(line == 444 || line == 555 || line != 666 || line != 888){
        break;
      }
    }
  }
  if(line > 130 && line < 135){
    while (line != 777) {
      line = Math.ceil(Math.random() * 1000);
    }
  }
  if (bet <= 0) {
    document.getElementById('error').innerHTML = `Insert your bet!`;
    return;
  } else {
    document.getElementById('error').innerHTML = ``;
  }

  if (cash <= 0) {
    document.getElementById('error').innerHTML = `You don't have enough money!`;
    return;
  }

  while (line < 100 || line > 999) {
    line = Math.ceil(Math.random() * 1000);
  }

  line = line.toString();
  document.getElementById('number1').innerHTML = line[0];
  document.getElementById('number2').innerHTML = line[1];
  document.getElementById('number3').innerHTML = line[2];

  if (line == 777) {
    win++;
    cash += 100 * bet;
    cash = updateCash(cash);
    document.getElementById('winOrLose').innerHTML = `* JACKPOT!!! +${
      100 * bet
    }$.`;
    return;
  }
  if (
    line == 111 ||
    line == 222 ||
    line == 333 ||
    line == 444 ||
    line == 555 ||
    line == 666 ||
    line == 888 ||
    line == 999
  ) {
    win++;
    cash += Math.ceil(2.3 * bet);
    document.getElementById('winOrLose').innerHTML = `* You win! +${Math.ceil(
      Number(bet * 3)
    )}$.`;
    cash = updateCash(cash);
  } else {
    lose++;
    cash -= bet;
    cash = updateCash(cash);
    document.getElementById('cash').innerHTML = `You have ${cash}$`;

    document.getElementById('winOrLose').innerHTML = `* Try Again! -${bet}$`;
  }
  cash = updateCash(cash);
}
document.getElementById('error').innerHTML = `Insert your bet!`;
document.getElementById('error').innerHTML = `You don't have money!`;
casino();
cash = updateCash(cash);

document.getElementById('cash').innerHTML = `You have ${cash}$`;
document.getElementById('number1').innerHTML = 0;
document.getElementById('number2').innerHTML = 0;
document.getElementById('number3').innerHTML = 0;
document.getElementById('winOrLose').innerHTML = ``;

function updateCash(k) {
  if (cash != 100) {
    return cash;
  } else {
    return cash;
  }
}

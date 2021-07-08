var data = {
  directon: 'east',
  move: false,
  timeID: 0,
  x: 0,
  y: 0
};

var coin = {
  x: 0,
  y: 0,
  counter: 0
};

var $counter = document.querySelector('h1');
var $coin = document.querySelector('#Coin');
var $car = document.querySelector('#Car');
var east = 'east';
var west = 'west';
var north = 'north';
var south = 'south';

window.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowUp') {
    $car.className = north;
    data.directon = north;
  } else if (e.key === 'ArrowRight') {
    $car.className = east;
    data.directon = east;
  } else if (e.key === 'ArrowLeft') {
    $car.className = west;
    data.directon = west;
  } else if (e.key === 'ArrowDown') {
    $car.className = south;
    data.directon = south;
  } else if (e.key === ' ') {
    if (data.move === false) {
      data.timeID = setInterval(function () {
        if (Math.abs(data.x - coin.x) <= 50 &&
          Math.abs(data.y - coin.y) <= 50) {
          placeCoin();
          coin.counter++;
          $counter.textContent = `Coins: ${coin.counter}`;
        }
        if (data.directon === east) data.x += 100;
        else if (data.directon === west) data.x -= 100;
        else if (data.directon === south) data.y += 100;
        else if (data.directon === north) data.y -= 100;
        $car.style.left = `${data.x.toString()}px`;
        $car.style.top = `${data.y.toString()}px`;
      }, 16);
      data.move = true;
    } else {
      clearInterval(data.timeID);
      data.move = false;
    }
  } else return null;
});

function getRandom(max) {
  var number = Math.floor(Math.random() * max);
  return Math.round(number / 5) * 5;
}

function placeCoin() {
  coin.x = getRandom(window.innerWidth - 50);
  coin.y = getRandom(window.innerHeight - 50);
  $coin.style.left = `${coin.x.toString()}px`;
  $coin.style.top = `${coin.y.toString()}px`;
}

placeCoin();

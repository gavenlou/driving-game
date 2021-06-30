var data = {
  directon: 'east',
  move: false,
  timeID: 0,
  x: 0,
  y: 0
};

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
        if (data.directon === east) data.x += 5;
        else if (data.directon === west) data.x -= 5;
        else if (data.directon === south) data.y += 5;
        else if (data.directon === north) data.y -= 5;
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

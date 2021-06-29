var data = {
  directon: 'east'
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
  } else return null;
});

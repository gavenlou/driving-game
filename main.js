var data = {
  directon: 'east',
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
    // eslint-disable-next-line no-unused-vars
    var start = setInterval(function () {
      data.x += 3;
      $car.style.left = `${data.x.toString()}px`;
    }, 16);
  } else return null;
});

'use strict';

function randomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
// случайный элемент массива
function randomArrItem(array) {
  return array[randomInteger(0, array.length - 1)];
}

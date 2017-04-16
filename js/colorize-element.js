'use strict';


window.colorizeElement = function (element, colorArr, callback) {

  element.addEventListener('click', function () {

    callback(randomArrItem(colorArr));

  });
};



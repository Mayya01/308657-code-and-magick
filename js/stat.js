// stat.js
'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 70);

  // Переставляет Игрока и его время на первое место в массиве
  function setYourPlayerFirst() {
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      if (name === 'Вы') {
        var neededIndex = i;
        break;
      }
    }

    if (neededIndex !== 0) {
      var temp = names[0];
      names[0] = names[neededIndex];
      names[neededIndex] = temp;

      temp = times[0];
      times[0] = times[neededIndex];
      times[neededIndex] = temp;
    }
  }

  // Находит максимальное время.
  var getMaxTime = function () {
    var maxTime = -1;


    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > maxTime) {
        maxTime = time;


      }
    }
    return maxTime;

  };

  // Раскрашивает колонки
  var setColumnStyle = function (index) {
    if (names[index] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'rgba(' + 0 + ', ' + 0 + ', ' + 255 + ', ' + Math.random() + ')';
    }
  };

  // Рисует диаграмму
  var paintDiagramm = function () {
    var initialX = 150;
    var indentX = 90;
    var histogramHeight = 150;
    var fieldHeight = 260;
    var columnWidth = 40;
    var step = histogramHeight / (getMaxTime());

    for (var i = 0; i < times.length; i++) {
      var indentY = fieldHeight - times[i] * step;
      setColumnStyle(i);
      ctx.fillRect(initialX, indentY, columnWidth, times[i] * step);
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], initialX, histogramHeight + 125);
      ctx.fillText(Math.ceil(times[i]), initialX, indentY - 10);

      initialX += indentX;
    }
  };

  setYourPlayerFirst();
  paintDiagramm();
};

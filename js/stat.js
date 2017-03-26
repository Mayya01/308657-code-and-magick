// stat.js
"use strict";

window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(110, 20, 420, 270);
    
    ctx.fillStyle = "white";
    ctx.fillRect(100, 10, 420, 270);
    
    
    ctx.fillStyle = "#000";
    ctx.font = "16px PT Mono";
    ctx.fillText("Ура вы победили! Список результатов:", 120, 40);
    
    var maxTime = -1;
    var maxIndex = -1;
    
    for (var i = 0; i < times.length; i++) {
        var time = times[i];
        if (time > maxTime) {
            maxTime = time; 
            maxIndex = i;
        }
    } 
    var initialX = 200;
    var indentX = 50;
    var histogramHeight = 150;
    var fieldHeight = 260;
    var columnWidth = 40;
    var step = histogramHeight / (maxTime);
    
    for (var i = 0; i<times.length;  i++){
        var indentY = fieldHeight - times[i] * step;
        ctx.fillStyle = 'rgba(' + 0 + ', ' + 0 + ', ' + 255 + ', ' + Math.random() + ')';
        ctx.fillRect(initialX, indentY, columnWidth, times[i] * step); 
        ctx.fillStyle = '#000';
        ctx.fillText(names[i],initialX , histogramHeight + 125);
        initialX += indentX ;
    }    
};
'use strict';

window.renderWizardList = (function () {

  var randomData = {
    userName: ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', ' Люпита', 'Вашингтон'],
    userSurname: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    usercoatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    usereyesColor: ['black', 'red', 'blue', 'yellow', 'green'],
  };

  var WIZARD_ARRAY = [];


  var getRandomWizard = function () {
    var wizardData = {}; // Маг - объект.

    var fieldsArr = Object.keys(randomData);
    // Перебираем свойства объекта randomData  ['userName', 'userSurname', 'usercoatColor', 'usereyesColor']
    for (var i = 0; i < fieldsArr.length; i++) {
      var field = fieldsArr[i]; // текущее свойство объекта randomData (userSurname usercoatColor итп ).

        // Генерируем случайный индекс.
      var randIndex = Math.ceil(Math.random() * (randomData[field].length - 1));

        // ставим случайное значение из randomData для поля field
      wizardData[field] = randomData[field][randIndex];
    }
    return wizardData;
  };

  function getArray() {

    for (var i = 0; i < 5; i++) {
      var object = getRandomWizard();
      WIZARD_ARRAY[i] = object;

    }
  }

  getArray();

  return WIZARD_ARRAY;


})();



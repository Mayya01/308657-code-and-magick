'use strict';

var randomData = {
    userName: ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', ' Люпита', 'Вашингтон'],
    userSurname: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    usercoatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    usereyesColor: ['black', 'red', 'blue', 'yellow', 'green'],
}

var WIZARD_ARRAY = [];


var getRandomWizard = function () {
    var wizardData = {}; // Маг - объект.

    var fields_arr = Object.keys(randomData);
    // Перебираем свойства объекта randomData  ['userName', 'userSurname', 'usercoatColor', 'usereyesColor']
    for (var i = 0; i < fields_arr.length; i++) {
        var field = fields_arr[i]; // текущее свойство объекта randomData (userSurname usercoatColor итп ).

        // Генерируем случайный индекс.
        var randIndex = Math.ceil(Math.random() * (randomData[field].length - 1));

        // ставим случайное значение из randomData для поля field
        wizardData[field] = randomData[field][randIndex];
    }
    return wizardData;
}

function getArray() {

    for (var i = 0; i < 5; i++) {
        var object = getRandomWizard();
        WIZARD_ARRAY[i] = object;
    }
    
}
getArray();

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;


var getWizard = function (wizard) {
    var clonedWizardElement = similarWizardTemplate.cloneNode(true);

    clonedWizardElement.querySelector('.setup-similar-label').textContent = WIZARD_ARRAY[i].userName+' '+WIZARD_ARRAY[i].userSurname;

    clonedWizardElement.querySelector('.wizard-coat').style.fill = WIZARD_ARRAY[i].usercoatColor;
    clonedWizardElement.querySelector('.wizard-eyes').style.fill = WIZARD_ARRAY[i].usereyesColor;

    similarListElement.appendChild(clonedWizardElement);

    return clonedWizardElement;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARD_ARRAY.length; i++) {
    fragment.appendChild(getWizard(WIZARD_ARRAY[i]));
};
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
    


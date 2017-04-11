'use strict';


/* var randomData = {
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
getArray();*/

var WIZARD_ARRAY = window.renderWizardList;


var userDialog = document.querySelector('.setup');
/* userDialog.classList.remove('hidden');*/

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;


var getWizard = function (wizard) {
  var clonedWizardElement = similarWizardTemplate.cloneNode(true);

  clonedWizardElement.querySelector('.setup-similar-label').textContent = WIZARD_ARRAY[i].userName + ' ' + WIZARD_ARRAY[i].userSurname;

  clonedWizardElement.querySelector('.wizard-coat').style.fill = WIZARD_ARRAY[i].usercoatColor;
  clonedWizardElement.querySelector('.wizard-eyes').style.fill = WIZARD_ARRAY[i].usereyesColor;

  similarListElement.appendChild(clonedWizardElement);

  return clonedWizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARD_ARRAY.length; i++) {
  fragment.appendChild(getWizard(WIZARD_ARRAY[i]));
}
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');

/*
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var buttonSave = document.querySelector('.button');


var State = {
  setupIsOpen: false,
  setupCloseHover: false
};

var openSetup = function () {
  State.setupIsOpen = true;
  setup.classList.remove('hidden');
};
var closeSetup = function (save) {
  if (save && !document.querySelector('.setup-user-name').validity.valid) {
    alert('Заполни форму!');
    return;
  }

  State.setupIsOpen = false;
  setup.classList.add('hidden');
};

// Открытие окна.setup при нажатии на блок .setup-open(1.1)
setupOpen.addEventListener('click', function () {
  openSetup();

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      closeSetup();
    }
  });
});

 // Закрытие окна с помощью esc
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    closeSetup();
  }
});
// Закрытие окна при фокусе на крестике с помощью Enter
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13 && State.setupCloseHover) {
    closeSetup();
  }
});


setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closeSetup();

  }
});
setupClose.addEventListener('mouseover', function () {
  State.setupCloseHover = true;
});
setupClose.addEventListener('mouseleave', function () {
  State.setupCloseHover = false;
});

// Закрытие окна при клике на .button,когда диалог открыт (2.4)
buttonSave.addEventListener('click', function () {
  closeSetup(true);
});
// Закрытие окна при нажатии Enter,когда диалог открыт (2.4)
buttonSave.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closeSetup(true);
  }
});

// Открытие окна, когда иконка .setup-open-icon  в фокусе с помощью Enter
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openSetup();
  }
});

// Закрытие окна.setup при нажатии на блок .setup-close
setupClose.addEventListener('click', function () {
  closeSetup();
});

*/

// Проверка имени пользователя
var checkUserName = document.querySelector('.setup-user-name');
checkUserName.required = true;
checkUserName.maxlength = 50;
checkUserName.minlength = 2;

// Обработчик событий изменений цвета мантии
/* var changeColorCoatHandler = function () {
  document.querySelector('.wizard-coat').style.fill = randomArrItem(['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']);
};
// Обработчик событий изменений цвета глаз
var changeEyesColorHandler = function () {
  document.querySelector('.wizard-eyes').style.fill = randomArrItem(['black', 'red', 'blue', 'yellow', 'green']);
};
// Обработчик событий изменений цвета файерболла
var changeFireballColorHandler = function () {
  document.querySelector('.setup-fireball-wrap').style.background = randomArrItem(['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']);
};

// Изменения цветов
document.querySelector('.wizard-coat').addEventListener('click', changeColorCoatHandler);

document.querySelector('.wizard-eyes').addEventListener('click', changeEyesColorHandler);

document.querySelector('.setup-fireball-wrap').addEventListener('click', changeFireballColorHandler);*/

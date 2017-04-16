'use strict';

(function () {

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


// Проверка имени пользователя
  var checkUserName = document.querySelector('.setup-user-name');
  checkUserName.required = true;
  checkUserName.maxlength = 50;
  checkUserName.minlength = 2;

})();

(function () {
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    artifacts.style.outline = '2px dashed red';
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  var artifacts = document.querySelector('.setup-artifacts');

  artifacts.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;

  });

  artifacts.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    artifacts.style.outline = 'none';
    if (evt.target.children.length === 0) {
      evt.target.appendChild(draggedItem.cloneNode(true));
    }

  });

// Затаскивание элемента в dropzone
  artifacts.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

// Покидание dropzone
  artifacts.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';

    evt.preventDefault();
  });


})();

window.fillColor = (function () {
  // Изменение цвета мантии
  var wizardColorCoat = document.querySelector('.wizard-coat');
  var wizardCoatColorArray = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  var colorizeWizardCoat = function (color) {
    wizardColorCoat.style.fill = color;
  };

  window.colorizeElement(wizardColorCoat, wizardCoatColorArray, colorizeWizardCoat);

// Изменение цвета глаз
  var wizardEyesColor = document.querySelector('.wizard-eyes');
  var wizardEyesColorArray = ['black', 'red', 'blue', 'yellow', 'green'];

  var colorizeWizardEyes = function (color) {
    wizardEyesColor.style.fill = color;
  };

  window.colorizeElement(wizardEyesColor, wizardEyesColorArray, colorizeWizardEyes);

  // Изменение цвета файрболла
  var wizardFireballColor = document.querySelector('.setup-fireball-wrap');
  var wizardFireballColorArray = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var colorizeWizardFireball = function (color) {
    wizardFireballColor.style.background = color;
  };

  window.colorizeElement(wizardFireballColor, wizardFireballColorArray, colorizeWizardFireball);

})();



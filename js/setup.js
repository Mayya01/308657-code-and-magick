'use strict';


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


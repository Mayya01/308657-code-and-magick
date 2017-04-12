'use strict';

window.allHandlers = (function () {

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
    setup.style.top = '100px';
    setup.style.left = '50%';
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

})();


window.fillColor = (function () {

  // Обработчик событий изменений цвета мантии
  var changeColorCoatHandler = function () {
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

  document.querySelector('.setup-fireball-wrap').addEventListener('click', changeFireballColorHandler);

})();

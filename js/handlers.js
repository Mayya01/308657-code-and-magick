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



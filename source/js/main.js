'use strict';

// мобильное меню-гамбургер
(function () {
  // корректирует расположение текста в секции HERO, если JS загрузится
  var HERO_TEXT_PADDING = '79px 18px 235px';

  var pageHeader = document.querySelector('.page-header');
  var headerToggle = document.querySelector('.page-header__toggle');
  var heroText = document.querySelector('.hero__wrapper');

  if (pageHeader && headerToggle && heroText) {
    pageHeader.classList.remove('page-header--nojs');
    pageHeader.classList.remove('page-header--opened');
    pageHeader.classList.add('page-header--closed');
    heroText.style.padding = HERO_TEXT_PADDING;

    headerToggle.addEventListener('click', function () {
      if (pageHeader.classList.contains('page-header--closed')) {
        pageHeader.classList.remove('page-header--closed');
        pageHeader.classList.add('page-header--opened');
      } else {
        pageHeader.classList.add('page-header--closed');
        pageHeader.classList.remove('page-header--opened');
      }
    });
  }
})();

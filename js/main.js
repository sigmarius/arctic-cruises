'use strict';

// мобильное меню-гамбургер
(function () {
  var pageHeader = document.querySelector('.page-header');
  var headerToggle = document.querySelector('.page-header__toggle');
  var heroImage = document.querySelector('.hero img');

  if (pageHeader && headerToggle && heroImage) {
    pageHeader.classList.remove('page-header--nojs');
    pageHeader.classList.remove('page-header--opened');
    pageHeader.classList.add('page-header--closed');

    headerToggle.addEventListener('click', function () {
      if (pageHeader.classList.contains('page-header--closed')) {
        pageHeader.classList.remove('page-header--closed');
        pageHeader.classList.add('page-header--opened');
        heroImage.style.top = '240px';
      } else {
        pageHeader.classList.add('page-header--closed');
        pageHeader.classList.remove('page-header--opened');
        heroImage.style.top = '0px';
      }
    });
  }
})();

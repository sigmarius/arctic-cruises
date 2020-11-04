'use strict';

// мобильное меню-гамбургер
(function () {
  var pageHeader = document.querySelector('.page-header');
  var headerToggle = document.querySelector('.page-header__toggle');
  var heroImage = document.querySelector('.hero__image');

  pageHeader.classList.remove('page-header--nojs');
  pageHeader.classList.remove('page-header--opened');
  heroImage.classList.remove('hero__image--moved');
  pageHeader.classList.add('page-header--closed');

  headerToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('page-header--closed')) {
      pageHeader.classList.remove('page-header--closed');
      pageHeader.classList.add('page-header--opened');
      heroImage.classList.add('hero__image--moved');
    } else {
      pageHeader.classList.add('page-header--closed');
      pageHeader.classList.remove('page-header--opened');
      heroImage.classList.remove('hero__image--moved');
    }
  });
})();


// карточки путешествий
(function () {
  var cruiseItems = Array.from(document.querySelectorAll('.cruises__item'));

  cruiseItems.forEach(function (item) {
    item.addEventListener('touchstart', function () {
      if (item.classList.contains('cruises__item--active')) {
        item.classList.remove('cruises__item--active');
      } else {
        item.classList.add('cruises__item--active');
      }
    });
  });

})();

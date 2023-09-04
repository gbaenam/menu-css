
const navMenu = document.querySelector('.nav__item-wrapper'),

linkClose = document.querySelector('.nav__link-close'),

itemWrapper = document.querySelector('.nav__item-wrapper')

navMenu.style.paddingTop = `calc(${((innerHeight-itemWrapper.clientHeight)/2)-linkClose.clientHeight}px)`
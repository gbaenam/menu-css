
const menuPadding = () => {
    document.querySelector('.nav__menu').style.padding =
    `calc(${(innerHeight-document.querySelector('.nav__item-wrapper').clientHeight)/2}px) 2.5rem 0`
}
menuPadding()
addEventListener('resize', menuPadding)



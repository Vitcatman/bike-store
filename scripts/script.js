const terrainsSwiper = new Swiper(".bike-types__swiper", {
  navigation: {
      nextEl: ".bike-types__button-right, .bike-types__right-mobbutton",
      prevEl: ".bike-types__button-left, .bike-types__left-mobbutton",
  },
  slidesPerView: 1,
});

const modelsSwiper = new Swiper(".bike-models__swiper", {
  slidesPerView: 1,
  breakpoints: {
    630: {
        slidesPerView: 3,
    },

  },
  pagination: {
    el: ".bike-models__pagination",
    clickable: true,
  },
});

const tabs = document.querySelectorAll('.bike-models__menu-link');
const tabContent = document.querySelectorAll('.bike-models__swiper')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContent.forEach(tabContent => {
      tabContent.classList.remove('bike-models__swiper_active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('bike-models__menu-link_active')
    })
    tab.classList.add('bike-models__menu-link_active')
    target.classList.add('bike-models__swiper_active')
  })
});

window.onload=function(){
  const menuElem = document.getElementById('dropdown-content'),
      titleElem = menuElem.querySelector('.bike-models__dropdown-title'),
      menuLinks = menuElem.querySelector('.bike-models__menu-links');
      document.onclick = function(event) {
      let target = elem = event.target;
      while (target != this) {
            if (target == menuElem) {
            if(elem.tagName == 'A') titleElem.innerHTML = elem.textContent;
            menuLinks.classList.toggle('bike-models__menu-links_opened')
                return;
            }
            target = target.parentNode;
        }
      menuLinks.classList.remove('bike-models__menu-links_opened');
  }
  }

  const headerBurger = document.querySelector('.header__burger');
  const burgerSpan = document.querySelector('.header__burger-span');
  const headerMenu = document.querySelector('.header__menu');
  const pageBody = document.querySelector('.body');
  const headerLinks = document.querySelectorAll('.header__link');

  headerBurger.addEventListener('click', function (){
    headerBurger.classList.toggle('header__burger_active');
    burgerSpan.classList.toggle('header__burger-span_active');
    headerMenu.classList.toggle('header__menu_active');
    pageBody.classList.toggle('body_locked');

    for( let i=headerLinks.length; i--; ) {
      headerLinks[i].addEventListener( 'click', function(){
        headerBurger.classList.remove('header__burger_active');
        burgerSpan.classList.remove('header__burger-span_active');
        headerMenu.classList.remove('header__menu_active');
        pageBody.classList.remove('body_locked');
      });
    }
  })

  const toggleTheme = document.querySelectorAll(".theme-toggler__checkbox");
  const toggleBlocks = document.querySelectorAll(".theme-selector");

  toggleTheme.forEach(el => {
    el.addEventListener("change", function(e){
        if (e.target.checked){
     toggleBlocks.forEach(element =>
      {element.classList.add('theme-selector_black')}
      )
        } else {
        toggleBlocks.forEach(element =>
          {element.classList.remove('theme-selector_black')}
          )
      }
    })
    });

    const mailSubmitButton = document.querySelector('.subscription-form__button');
    const mailInputForm = document.querySelector('.subscription-form__email');

    mailInputForm.addEventListener('click', function() {
      mailSubmitButton.classList.add('subscription-form__button_active');
      mailInputForm.placeholder = "";
    });

    mailSubmitButton.addEventListener('click', function(evt){
      evt.preventDefault();
      const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (mailInputForm.value.match(emailRegex)) {
        mailInputForm.value = "";
        mailInputForm.placeholder = 'Круто!';}
        else {
          mailInputForm.value = "";
          mailInputForm.placeholder = 'Введен некорректный email'
        }
    });

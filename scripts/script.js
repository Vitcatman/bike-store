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

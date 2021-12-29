//Splide
document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
    type   : 'loop',
    padding: '5rem',
    perPage: 3,
    perMove: 1,
    rewind : true,
  } );
  splide.mount();
} );

//splide logo
document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide__logos', {
    type   : 'loop',
    padding: '5rem',
    autoplay: true,
    rewind: true,
    perPage: 4,
    perMove: 4,
    rewindSpeed: '100',
    padding: '1rem',
    pauseOnHover: true,
  } );
  splide.mount();
} );

const toggle = document.getElementById('nav-btn');
toggle.addEventListener('click', toggleNav);

function toggleNav() {
  var nav = document.querySelector('nav');
  if (nav.style.display === 'flex' && nav.style.opacity === '1') {
    nav.style.opacity = '0';
    document.getElementById('toggle').checked = false;
    window.setTimeout(function() {
    nav.style.display = 'none';
    },350);
    console.log('hide');
  }
  else {
    nav.style.display = 'flex';
    window.setTimeout(function() {
    nav.style.opacity = '1';
    }, 100);
    document.getElementById('toggle').checked = true;
    console.log('show');
  }
}

//grab array of splide cards (li) > pick the right one > expand(add class ".target" and modify ".contentBx" properties)
let navUl = [].slice.call(document.querySelectorAll('.splide__list > li'));
for (let i = 0; i < navUl.length; i++) {
  navUl[i].addEventListener('click', expand);
}


function expand(event) {
  let hiddenBx = event.currentTarget.querySelector('div.splide__slide__container > .slide__hiddenBx');
  let slideTxt = event.currentTarget.querySelector('div.splide__slide__container > .slide__contentBx > .slide__textBx');

  if (event.currentTarget.classList.contains('target')){
    slideTxt.style.visibility = 'visible';
    hiddenBx.style.transition = 'all 0.5s ease-in-out';
    hiddenBx.style.opacity = '0';
    event.currentTarget.classList.remove('target');
  }

  else {
    slideTxt.style.visibility = 'hidden';
    hiddenBx.style.transition = 'all 2s ease-in-out';
    hiddenBx.style.opacity = '1';
    event.currentTarget.classList.add('target');
  }
}
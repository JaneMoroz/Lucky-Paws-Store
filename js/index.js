/////////////////////////////////////////////////////////////////////
// Hamburger Menu
// Create a condition that targets viewports at least 900px wide
const mediaQuery = window.matchMedia('(max-width: 900px)');
function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!');

    let headerInner = document.getElementsByClassName('header__inner')[0];
    headerInner.classList.toggle('hamburger-is-visible');

    let nav = document.getElementsByClassName('nav')[0];
    nav.addEventListener('mouseleave', function (event) {
      nav.style.display = 'none';
    });

    let hamburgerBtn = document.getElementsByClassName(
      'header-tabs__el--hamburger'
    )[0];

    hamburgerBtn.addEventListener('click', function (event) {
      nav.style.display = 'flex';
    });
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);

/////////////////////////////////////////////////////////////////////
// Slide show
// TODO: Finish slideshow

let slideIndex = 1;
// let previousIndex;
// let nextIndex;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  // previousIndex = n - 1;
  // nextIndex = n + 1;
  let slides = document.getElementsByClassName('slide');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
    // previousIndex = slides.length;
    // nextIndex = 2;
  }
  if (n < 1) {
    slideIndex = slides.length;
    // previousIndex = slides.length - 1;
    // nextIndex = 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.zIndex = '-1';
    // if (i !== previousIndex - 1) {
    //   slides[i].style.display = 'none';
    // }
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'inline-block';
  slides[slideIndex - 1].style.zIndex = '0';
  dots[slideIndex - 1].className += ' active';
}

/////////////////////////////////////////////////////////////////////
// Dropdown menu
let dropdownParents = document.getElementsByClassName('parent');
for (let i = 0; i < dropdownParents.length; i++) {
  console.log(dropdownParents[i]);
  const parent = dropdownParents[i];
  parent.addEventListener('mouseenter', function (event) {
    let dropdownChild = parent.getElementsByClassName('nav__sub')[0];
    dropdownChild.classList.add('dropdown__is-visible');
  });

  parent.addEventListener('mouseleave', function (event) {
    let dropdownChild = parent.getElementsByClassName('nav__sub')[0];
    dropdownChild.classList.remove('dropdown__is-visible');
  });
}

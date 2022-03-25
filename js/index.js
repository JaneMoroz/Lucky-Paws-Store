let slideIndex = 1;
let previousIndex;
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
  previousIndex = n - 1;
  let slides = document.getElementsByClassName('slide');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
    previousIndex = slides.length;
  }
  if (n < 1) {
    slideIndex = slides.length;
    previousIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.zIndex = '-1';
    if (i !== previousIndex - 1) {
      slides[i].style.display = 'none';
    }
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'inline-block';
  slides[slideIndex - 1].style.zIndex = '0';
  dots[slideIndex - 1].className += ' active';
}

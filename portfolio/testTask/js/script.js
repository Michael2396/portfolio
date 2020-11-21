var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("duplicate-photo-li");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var arrowRight = document.querySelector('.arrow-right');
arrowRight.addEventListener('click', event => {
    plusSlides(1);
});
var arrowLeft = document.querySelector('.arrow-left');
arrowLeft.addEventListener('click', event => {
    plusSlides(-1);
});

var duplicatePhoto = document.querySelector('.duplicate-photo-ul');
duplicatePhoto.addEventListener('click', event => {
    var el = event.target.id;
    console.log(event.target, el);
    currentSlide(el);
    if (el == 5) {
    }
});

var description = document.querySelector('.description-ul');
const descriptioInfo = document.querySelector('.description-info');
description.addEventListener('click', event => {
    descriptioInfo.innerHTML = null;
    var desc = event.target;
    desc = desc.getAttribute('data-name');
    descriptioInfo.innerHTML = desc;
});
var overlay = document.querySelector('.overlay');
var buttonShowShop = document.querySelector('.list-all-store-span');
buttonShowShop.addEventListener('click', event => {
    overlay.setAttribute('style', 'display:block')
});
var buttonPopUp = document.querySelector('.button-popup');
buttonPopUp.addEventListener('click', event => {
    overlay.setAttribute('style', 'display:none')
});

var selectProductSize = document.querySelectorAll('.product-size-li');

selectProductSize.forEach(item => {
    item.addEventListener('click', event => {
        selectProductSize.forEach(item => {
            // item.setAttribute('style','border: 1px solid #45484A');
            item.classList.remove('activeSelect');
        })
    });
    item.addEventListener('click', event => {
        // item.setAttribute('style', 'border:2px solid #EF1B1B');
        item.classList.add('activeSelect');
    });
});

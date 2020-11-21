function myFunction() {
    var popupClear = document.getElementsByClassName('popuptext');
    for (let i = 0; i < popupClear.length; i++) {
        console.log(popupClear[i].classList.remove('show'))
    }
    var popup = event.target;
    popup = popup.parentElement.querySelector('.popuptext');
    popup.classList.toggle('show')
}

function myFunctionClosedPopUp() {
    var popup = event.target;
    popup = popup.parentElement;
    popup.classList.remove("show");
}


$('.your-class').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});

let hour = document.querySelector('.first-screen-description-time-hour-number');
let minute = document.querySelector('.first-screen-description-time-minute-number');
let second = document.querySelector('.first-screen-description-time-second-number');

function countdown(dateEnd) {
    var timer, days, hours, minutes, seconds;

    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();

    if ( isNaN(dateEnd) ) {
        return;
    }

    timer = setInterval(calculate, 1000);

    function calculate() {
        var dateStart = new Date();
        var dateStart = new Date(dateStart.getUTCFullYear(),
            dateStart.getUTCMonth(),
            dateStart.getUTCDate(),
            dateStart.getUTCHours(),
            dateStart.getUTCMinutes(),
            dateStart.getUTCSeconds());
        var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

        if ( timeRemaining >= 0 ) {
            days    = parseInt(timeRemaining / 86400);
            timeRemaining   = (timeRemaining % 86400);
            hours   = parseInt(timeRemaining / 3600);
            timeRemaining   = (timeRemaining % 3600);
            minutes = parseInt(timeRemaining / 60);
            timeRemaining   = (timeRemaining % 60);
            seconds = parseInt(timeRemaining);

            // document.getElementById("days").innerHTML    = parseInt(days, 10);
            document.getElementById("hours").innerHTML   = ("0" + hours).slice(-2);
            document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
            document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        } else {
            return;
        }
    }

    function display(days, hours, minutes, seconds) {}
}
countdown('01/19/2038 11:00:00 AM');

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault(); //опустошим стандартную обработку
        var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
            top = $(id).offset().top; //определим высоту от начала страницы до якоря
        $('body,html').animate({scrollTop: top}, 1000); //сделаем прокрутку за 1 с
    });
});
// Import all bootstrap plugins
import * as bootstrap from 'bootstrap'; 


// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}


var swiper1 = new Swiper(".mySwiper", {
  pagination: {
    
    el: ".swiper-pagination1",
  },
});


/* Heart Butto*/


const buton = document.querySelectorAll(".heart");
buton.forEach(b => {
  const child = b.querySelector("i");
  b.addEventListener('click', function (){
    child.classList.toggle("bi-heart-fill");
    child.classList.toggle("bi-heart");
    child.classList.toggle("text-danger");
    
  })
});
 /* TIME COUNTDOWN */
  // Setup End Date for Countdown (getTime == Time in Milleseconds)
  let launchDate = new Date("May 15, 2022 12:00:00").getTime();

  // Setup Timer to tick every 1 second
  let timer = setInterval(tick, 1000);
  
  function tick () {
    // Get current time
    let now = new Date().getTime();
    // Get the difference in time to get time left until reaches 0
    let t = launchDate - now;
  
    // Check if time is above 0
    if (t > 0) {
      // Setup Days, hours, seconds and minutes
      // Algorithm to calculate days...
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      // prefix any number below 10 with a "0" E.g. 1 = 01
      if (days < 10) { days = "0" + days; }
      
      // Algorithm to calculate hours
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      if (hours < 10) { hours = "0" + hours; }
  
      // Algorithm to calculate minutes
      let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      if (mins < 10) { mins = "0" + mins; }
  
      // Algorithm to calc seconds
      let secs = Math.floor((t % (1000 * 60)) / 1000);
      if (secs < 10) { secs = "0" + secs; }
  
      // Create Time String
      let time = `${days} : ${hours} : ${mins} : ${secs}`;
  
      // Set time on document
      document.querySelector('.countdown').innerText = time;
    }
  }







/*swiper*/
let appendNumber = 10;
let prependNumber = 1;
const swiper = new Swiper('.swiper2', {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {

        slidesPerView: 4 ,
    },
    768: {
        slidesPerView: 3,
    },
    576: {
        slidesPerView: 2,
        
    },
    0: {
      slidesPerView: 1,
      
  }
}
  
});

document
  .querySelector('.prepend-2-slides')
  .addEventListener('click', function (e) {
    e.preventDefault();
    swiper.virtual.prependSlide([
      'Slide ' + --prependNumber,
      'Slide ' + --prependNumber,
    ]);
  });

document
  .querySelector('.append-slide')
  .addEventListener('click', function (e) {
    e.preventDefault();
    swiper.virtual.appendSlide('Slide ' + ++appendNumber);
  });



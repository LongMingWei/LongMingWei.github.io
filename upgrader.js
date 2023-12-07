$(document).ready(function() {
  $('a.internal-link').click(function(event) {
    const linkTarget = $(this).attr('href');
    
    if (linkTarget.startsWith('#')) {
      event.preventDefault();
      const section = $(linkTarget);
      $('html, body').animate({ scrollTop: section.offset().top - 50}, 'slow');
    }
  });

let isToggling = false;

$('#hoverButton').mouseover(function() {
  if (!isToggling) {
    isToggling = true;
    $('#special').toggle();
    $('#special2').toggle();
  }
});

$('#hoverButton').mouseleave(function() {
  if (isToggling) {
    isToggling = false;
    $('#special').toggle();
    $('#special2').toggle();
  }
});

  var upgrades = 0;

$(".upgrade").click(function() {
  upgrades++;
  if (upgrades == 1) {
    // $("div#horizontal-message").toggle();
    $("div#Home1").toggle();
    $("div#Home").toggle();
    $("div#Ribbon").addClass("upgraded");
    $("div#About").toggle();
    $("#text").text("Much better, but still not good enough");
  }
  if (upgrades == 2) {
    $("div#About img").toggle();
    $("div#About").addClass("upgraded");
    ScrollReveal({
      reset: true,
      distance: '100px',
      duration: 2000,
      origin: 'left'
    });
  
    ScrollReveal().reveal('img,h1,h3');
    $("div#Projects").toggle();
    $('#text').text('Very nice, just one last upgrade!');
  }
  if (upgrades == 3) {
    $("div#Projects").addClass("upgraded");
    var left = document.querySelector('#Projects a.carousel-control-prev span');
    left.innerHTML = '<i class="fas fa-hand-point-left"></i>';
    var right = document.querySelector('#Projects a.carousel-control-next span');
    right.innerHTML = '<i class="fas fa-hand-point-right"></i>';
    $("div#Button").toggle();
  }
});
});

var typed = new Typed('.typed', {
  strings: ["game", "web", "software"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});
        

// var currentIndex = 0;
// var images = ['simon.jpg', 'hubspot.jpg', 'tiktok.png'];
// var texts = ['A Simon Says game made by pure HTML', 'A form that uses backend and API to transfer data to HubSpot', 'A project done for Tiktok Tech Immersion Programme that simulates an instant messaging system'];
// var links = ['https://github.com/LongMingWei/Random-WebDev-Projects/tree/main/Simon', 'https://github.com/LongMingWei/Random-WebDev-Projects/tree/main/Subscription%20HubSpot%20API', 'https://github.com/LongMingWei/Tiktok-Server-Assignment-main/tree/main/Tiktok_Server_Assignment-main']

// function showSlide(index) {
//   var slideshow = document.querySelector('.slideshow');
//   var img = slideshow.querySelector('img');
//   var text = slideshow.querySelector('.text');
//   var elements = document.querySelectorAll('.fade-in');
//   elements.forEach(function(element) {
//     element.classList.remove('show');
//     setTimeout(function() {
//       img.src = images[index];
//       text.textContent = texts[index];
//       text.href = links[index];
      
//       elements.forEach(function(element) {
//         element.classList.add('show');
//       });
      
//       var prevButton = document.querySelector('button.prev');
//       var nextButton = document.querySelector('button.next');
      
//       prevButton.addEventListener('click', prevSlide);
//       nextButton.addEventListener('click', nextSlide);
//     }, 500);
//   });
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   showSlide(currentIndex);
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % images.length;
//   showSlide(currentIndex);
//   console.log("Next");
// }

// var prevButton = document.querySelector('button.prev');
// var nextButton = document.querySelector('button.next');

// prevButton.addEventListener('click', prevSlide);
// nextButton.addEventListener('click', nextSlide);

// showSlide(currentIndex);
// });
     


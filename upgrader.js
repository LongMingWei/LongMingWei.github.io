$(document).ready(function() {
  $('a.internal-link').click(function(event) {
    const linkTarget = $(this).attr('href');
    
    if (linkTarget.startsWith('#')) {
      event.preventDefault();
      const section = $(linkTarget);
      $('html, body').animate({ scrollTop: section.offset().top }, 'slow');
    }
  });

  $('#hoverButton').mouseover(function() {
    $('#special').toggle();
    $('#special2').toggle();
  });

  $('#hoverButton').mouseleave(function() {
    $('#special').toggle();
    $('#special2').toggle();
  });

  var upgrades = 0;

$(".upgrade").click(function() {
  upgrades++;
  if (upgrades == 1) {
    $("div#Home1").toggle();
    $("div#Home").toggle();
    $("div#Ribbon").addClass("upgraded");
    $("div#About").toggle();
    $("#text").text("Much better, but still not good enough");
  }
  if (upgrades == 2) {
    $("div#About").addClass("upgraded");
    ScrollReveal({
      reset: true,
      distance: '30px',
      duration: 1000,
      origin: 'left'
    });
  
    ScrollReveal().reveal('h1,h3');
    $("div#Projects").toggle();
    $('#text').text('Very nice, just one last upgrade!');
  }
  if (upgrades == 3) {
    $("div#Projects").addClass("upgraded");
    $("div#Button").toggle();
  }
});

var currentIndex = 0;
var images = ['desktop.jpg', 'download.jfif', 'image3.jpg'];
var texts = ['Text 1', 'Text 2', 'Text 3'];

function showSlide(index) {
  var slideshow = document.querySelector('.slideshow');
  var img = slideshow.querySelector('img');
  var text = slideshow.querySelector('.text');
  var elements = document.querySelectorAll('.fade-in');
  elements.forEach(function(element) {
    element.classList.remove('show');
    setTimeout(function() {
      img.src = images[index];
      text.textContent = texts[index];
      element.classList.add('show');
    }, 500);
  });
  
  
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

showSlide(currentIndex);
});

var typed = new Typed('.typed', {
  strings: ["web", "software", "game"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});


     
        
    
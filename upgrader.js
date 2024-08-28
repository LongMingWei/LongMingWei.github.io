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

$('#hoverButton1').mouseover(function() {
  if (!isToggling) {
    isToggling = true;
    $('#special').toggle();
    $('#special2').toggle();
  }
});

$('#hoverButton1').mouseleave(function() {
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
    $("div#Home").toggle();
    $("div#Ribbon").toggle();
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
  
    ScrollReveal().reveal('h1,h3');
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


$(document).ready(function() {
  $('a.internal-link').click(function(event) {
    const linkTarget = $(this).attr('href');
    
    if (linkTarget.startsWith('#')) {
      event.preventDefault();
      const section = $(linkTarget);
      if (linkTarget == '#Home') {$('html, body').animate({ scrollTop: 0 }, 'slow');}
      else {$('html, body').animate({ scrollTop: section.offset().top }, 'slow');}
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
    $("div#Projects").toggle();
    $('#text').text('Very nice, just one last upgrade!');
  }
  if (upgrades == 3) {
    $("div#Projects").addClass("upgraded");
    $("div#Button").toggle();
  }
});

});

var typed = new Typed('.typed', {
  strings: ["web", "software", "game"],
  typeSpeed: 50,
  loop: true
});
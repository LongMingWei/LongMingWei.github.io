var upgrades = 0;

$(".upgrade").click(function() {
  upgrades++;
  if (upgrades == 1) {
    $("div#Home1").toggle();
    $("div#Home").toggle();
  }
});

$(document).ready(function() {
  $('a.internal-link').click(function(event) {
    const linkTarget = $(this).attr('href');
    
    if (linkTarget.startsWith('#')) {
      event.preventDefault();
      const section = $(linkTarget);
      $('html, body').animate({ scrollTop: section.offset().top }, 'slow');
    }
  });
});

var typed = new Typed('.typed', {
  strings: ["web", "software", "game"],
  typeSpeed: 50,
  loop: true
});
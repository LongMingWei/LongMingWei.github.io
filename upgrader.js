$(".upgrade").click(function() {
    $("body").children().each(function() {
        $(this).addClass("upgraded");
      });
});

$(document).ready(function() {
  $('a').click(function(event) {
    event.preventDefault(); 
    const section = $($(this).attr('href'));
    $('html, body').animate({ scrollTop: section.offset().top }, 'slow');
  });
});
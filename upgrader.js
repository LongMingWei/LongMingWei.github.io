$(".upgrade").click(function() {
    $("body").children().each(function() {
        $(this).addClass("upgraded");
      });
});

$(document).ready(function() {
  $('a[href="#About"]').click(function(event) {
    event.preventDefault(); 
    const about = $('#About');
    $('html, body').animate({ scrollTop: about.offset().top }, 'slow');
  });
});
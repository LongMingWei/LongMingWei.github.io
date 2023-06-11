$(".upgrade").click(function() {
    $("body").children().each(function() {
        $(this).addClass("upgraded");
      });
});
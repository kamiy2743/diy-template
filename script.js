$(function() {

  $("#howtouse").click(function() {
    $(".fa-chevron-right").toggleClass("none");
    $(".fa-chevron-down").toggleClass("none");
  });

  $(".fa-times").click(function() {
    $("#detail-container").hide();
  });
  $(".fa-arrows-alt-h").click(function() {
    $("#detail-container").toggleClass("small");
    if ($("#detail-container").hasClass("small")) {
      $("#detail-container").css("top","90px");
    } else {
      $("#detail-container").css("top","115px");
    }
  });

  $("#top-btn").click(function() {
    $("html,body").animate({"scrollTop":0},100);
  });

});


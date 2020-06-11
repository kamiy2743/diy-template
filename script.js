$(function() {

  $("#howtouse").click(function() {
    $(".fa-chevron-right").toggleClass("none");
    $(".fa-chevron-down").toggleClass("none");
  });

  $("#list-search select").change(function() {
    var cate = $("#category-list").val();
    var seri = $("#series-list").val();
    var obt = $("#obtain-list").val();
    var com = `category${cate} ` + `series${seri} ` + `obtain${obt} `;
    var command = com.replace("categoryall ",'').replace("seriesall ",'').replace("obtainall ",'');
    console.log(command);
    $(".item").each(function() {
      if ($(this).hasClass(`${command}`)) {
      } else {
        $(this).addClass("none");
      }
    });
  });

  $(".fa-times").click(function() {
    $("#detail-container").hide();
  });
  $(".fa-arrows-alt-h").click(function() {
    $("#detail-container").toggleClass("small");
    if ($("#detail-container").hasClass("small")) {
      $("#detail-container").css("top","70px");
    } else {
      $("#detail-container").css("top","95px");
    }
  });

  $("#top-btn").click(function() {
    $("html,body").animate({"scrollTop":0},100);
  });

});

$(function() {

  $(".get-if-btn").click(function() {
    var $parent = $(this).parents(".item");
    if ($(this).hasClass("get-selected")) {
      $(this).removeClass("get-selected").text("未取得");
      $parent.find(".dist-if-btn").removeClass("dist-selected").text("不可");
      $parent.find("select").prop("disabled",true);
      $parent.find("option").prop("selected",false);
    } else {
      $(this).addClass("get-selected").text("取得済");
    }
  });
  $(".dist-if-btn").click(function() {
    var $parent = $(this).parents(".item");
    if ($(this).hasClass("dist-selected")) {
      $(this).removeClass("dist-selected").text("不可");
      $parent.find("select").prop("disabled",true);
      $parent.find("option").prop("selected",false);
    } else {
      $(this).addClass("dist-selected").text("可");
      $parent.find(".get-if-btn").addClass("get-selected").text("取得済");
      $parent.find("select").prop("disabled",false);
      $parent.find(".opsele").prop("selected",true);
    }
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
      $("#detail-container").css("top","160px");
    } else {
      $("#detail-container").css("top","220px");
    }
  });

  $("#top-btn").click(function() {
    $("html,body").animate({"scrollTop":0},100);
  });

});

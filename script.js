$(function() {
// 使い方
  $("#howtouse").click(function() {
    $(".fa-chevron-right").toggleClass("none");
    $(".fa-chevron-down").toggleClass("none");
  });

// テンプレート作成画面へ
  $("#template").click(function() {
    $("header,main").hide();
    $("#main-template").show();
  });

// タブの切り替え
  function tabControl(y,n) {
    $(`.tab-title[value="${y}"]`).removeClass("bottom-none");
    $(`.tab-main[value="${y}"]`).addClass("none");
    $(`.tab-title[value="${n}"]`).addClass("bottom-none");
    $(`.tab-main[value="${n}"]`).removeClass("none");
  }
  $(".tab-title").click(function() {
    if ($(this).attr("value") == 2) {
      tabControl(1,2);
    } else {
      tabControl(2,1);
    }
  });

// 詳細機能を閉じたり縮小
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

// TOPに戻る
  $("#top-btn").click(function() {
    $("html,body").animate({"scrollTop":0},100);
  });

});

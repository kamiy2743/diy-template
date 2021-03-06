//script.js
  $("header,main").hide();
  $("#main-template").show();
// 使い方
  $("#howtouse").click(function() {
    $(".fa-chevron-right").toggleClass("none");
    $(".fa-chevron-down").toggleClass("none");
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

// テンプレート作成画面へ
  $("#template").click(function() {
    $("header,main").hide();
    $("#main-template").show();
  // 取得配布状況の取得
    $(".item-capture").each(function() {
      var index = $(".item-capture").index(this);
      var code = $(".item").eq(index).attr("code");
      if (code != 0) {
        $(this).find("img").addClass(`code-${code}`)
      }
    });
  });

// 一覧画面へ
  $(".whole").click(function() {
    $("#main-template").hide();
    $("header,main").show();
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

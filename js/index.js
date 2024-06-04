$(document).ready(function () {
  $(window).on("scroll", function () {
    var bp = $("#brand_position").offset().top;
    var sc1 = $(this).scrollTop();
    if (sc1 > bp - 300) {
      // 한번만 발생시키고 싶을 때 여기만 > 여러번 발생 시키고 싶을 때 remove Class 걸어주기 >12번째 줄
      $(".brand_position_logo").addClass("on");
    } else {
      $(".brand_position_logo").removeClass("on");
    }
  }); //
  $(window).on("scroll", function () {
    var sc2 = $(this).scrollTop();

    var asis = $("#asis_tobe").offset().top;

    if (sc2 > asis - 600) {
      $(".asis").addClass("on");
      $(".asis_tobe_k").addClass("on");
      $(".tobe").addClass("on");
    } else {
      $(".asis").removeClass("on");
      $(".asis_tobe_k").removeClass("on");
      $(".tobe").removeClass("on");
    }
  }); // scroll

  $(window).on("scroll", function () {
    var sc3 = $(this).scrollTop();

    var topbtn = $("#market_keyword").offset().top;

    if (sc3 > topbtn - 600) {
      $(".top_btn").addClass("on");
    } else {
      $(".top_btn").removeClass("on");
    }
  }); //

  scroll;
});

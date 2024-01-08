$(function(){


  //MENUボタンをクリックすると
  $(".drawer_button").on("click", function () {
    //drawer_buttonに.activeクラスの付け替え
    $(this).toggleClass("active");
    //背景表示をフェードイン/フェードアウトで切り替え
    $(".drawer_bg").fadeToggle();
    //.drawer_nav_wrapperに.openクラスの付け替え
    $(".drawer_nav_wrapper").toggleClass("open")
  });

  //背景をクリックすると
  $(".drawer_bg").on("click", function () {
    //背景が非表示になる
    $(this).hide();
    //drawer_buttonに.activeクラスを外す
    $(".drawer_button").removeClass("active");
    //.drawer_nav_wrapperの.openクラスを外す
    $(".drawer_nav_wrapper").removeClass("open");
  });


});
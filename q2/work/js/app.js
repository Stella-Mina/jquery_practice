$(function(){
  //OPENをクリックすると
  $(".modal_open_button").click(function () {
    //modal_winがフェードインして表示される
    $(".modal_win").fadeIn();
  });
  //×ボタンをクリックすると
  $(".modal_close_button span").click(function () {
    //modal_winがフェードアウトして非表示になる
    $(".modal_win").fadeOut();
  });
});
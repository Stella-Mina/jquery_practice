$(function(){

  //nav-itemをクリックしたときに
  $(".nav-item").on("click", function () {
    //nav-itemが要素の中で何番目かを取得し、変数aに代入
    var a = $(this).index();
    //description liからis-hiddenのcss名をつける
    $(".description li").addClass("is-hidden");
    //description liからis-hidden(display: none;)のcssはずして特定のインデックス.eq(a)だけ表示する処理
    $(".description li").eq(a).removeClass("is-hidden");
  });

});
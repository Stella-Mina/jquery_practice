$(function(){

  //q1の文字の色を緑にする
  $("#q1").css("color","green");


  //q2のボタンをクリックすると
  $("#q2").on("click",function () {
    //背景がpinkに代わる
    $(this).css("background","pink");
  });


  //q3のボタンをクリックすると
  $("#q3").on("click",function () {
    //背景が3秒でフェードアウトする
    $(this).fadeOut(3000);
  });


  //q4のボタンをクリックすると
  $("#q4").on("click",function () {
    //.large(サイズ変更)のクラス名にかわる
    $(this).addClass("large");
  });


  //q5のボタンをクリックすると
  $("#q5").on("click",function () {
    //DOMの挿入　前後に文字が入る
    $(this).prepend("<span>Domの中の前</span>")
    .append("<span>Domの中の後ろ</span>")
    .before("<span>Domの前</span>")
    .after("<span>Domの後ろ</span>");
  });


  //q6のボタンをクリックすると
  $("#q6").on("click",function () {
    //2秒かけて移動する
    $(this).animate({ "margin-top": 100, "margin-left": 100 }, 2000);
  });


  //q7のボタンをクリックすると
  $("#q7").on("click",function () {
    //idのノードをコンソールで表示
    console.log(this);
  });


  //q8のボタンをホバーしたり外したりすると
  $("#q8").on("mouseenter mouseleave",function () {
    //.large(サイズ変更)のクラス名がついたり外れたりする
    $(this).toggleClass("large");
  });


  //q9のリストをクリックすると
  $("#q9 li").on("click", function () {
  //要素のインデックスを取得し、変数aに格納
  const a = $(this).index();
  //アラートで表示させる
  alert (a);
  });


  //q10のリストをクリックすると
  $("#q10 li").on("click", function () {
  //要素のインデックスを取得し、変数aに格納
  const a = $(this).index();
  //#q11内のli要素を選択し、その中からa番目の要素に対してlarge-textというクラスを追加
  $("#q11 li").eq(a).addClass("large-text");
  });


});

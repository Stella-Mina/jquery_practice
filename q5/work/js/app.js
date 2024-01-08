$(function () {


  //.dropdwn>liをhoverしたとき
  $(".dropdwn >   li").hover(function () {
    //ホバーされた.dropdwn>liの子要素であるdropdwn_menuがslideして表示/非表示される
    $(this).children(".dropdwn_menu").stop().slideToggle();
  });

  
});



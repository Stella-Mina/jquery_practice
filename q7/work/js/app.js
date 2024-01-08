$(function(){
  //buttonをクリックすると
$("button").on("click", function () {

  //コンソールに名字を表示
  console.log("名字");
  //#family__nameの値をコンソールに表示
  console.log($("#family__name").val());

  //コンソールに名前を表示
  console.log("名前");
  //#given__nameの値をコンソールに表示
  console.log($("#given__name").val());

  //コンソールに生年月日を表示
  console.log("生年月日");
  //年月日のvalue値をコンソールに表示
  console.log($(".year").val() + "年" + $(".month").val() + "月" + $(".day").val() + "日");

  //コンソールに性別を表示
  console.log("性別");
  //name="gender"でチェックされたものをコンソールに表示
  console.log($(`[name="gender"]:checked`).val());

  //コンソールに職業を表示
  console.log("職業");
  //職業欄で選択されたものをコンソールに表示
  console.log($(".occupation").val());

  //コンソールにアカウント名を表示
  console.log("アカウント名");
  //#account__nameの値をコンソールに表示
  console.log($("#account__name").val());

  //コンソールにパスワードを表示
  console.log("パスワード");
  //#passwordの値をコンソールに表示
  console.log($("#password").val());

  //コンソールに認用パスワードを表示
  console.log("確認用パスワード");
  //#duplication__passwordの値をコンソールに表示
  console.log($("#duplication__password").val());

  //コンソールに住所を表示
  console.log("住所");
  //#addressの値をコンソールに表示
  console.log($("#address").val());

  //コンソールに電話番号を表示
  console.log("電話番号");
  //#telの値をコンソールに表示
  console.log($("#tel").val());

  //コンソールに購読情報を表示
  console.log("購読情報");
  //.subscription__labelでcheckされたものをループ処理
  $('[name="subscription"]:checked').each(function(){
    //選択されたものをコンソールに表示
    console.log($(this).val());
  });
  });

});

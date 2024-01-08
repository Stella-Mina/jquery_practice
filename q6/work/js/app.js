
$(function(){

//select-boxが変更されたら
$(".select-box").on("change", function () {
//selectValueにselect-boxのフォームの要素(select要素)を格納する
  var selectValue = $(this).val();
//listValueに.food-list liを格納する
  var listValue = $(".food-list li");


//.food-list liをループする
  listValue.each(function (){
// 各要素からdata-category-type属性の値を取得　categoryTypeに格納
    var categoryType = $(this).data("category-type");
//selectValueがallもしくはselectValueとcategoryTypeが一致する場合
    if (selectValue === "all" || selectValue === categoryType) {
// listValueが表示
      $(this).show();
    } else {
// listValue非表示
      $(this).hide();
    }
  })

})
});




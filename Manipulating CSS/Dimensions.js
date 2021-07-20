//Dimensions
//الأبعاد

//The width() and height() methods can be used to get and set the width and height of HTML elements.
//يمكن استخدام أساليب العرض () والارتفاع () للحصول على عرض وارتفاع عناصر HTML وتعيينهما.

//Let's set both the width and height of a div to 100px, as well as set a background color for it:
//لنقم بتعيين عرض وارتفاع div على 100 بكسل ، بالإضافة إلى تعيين لون خلفية له
$(function () {
    $("div").css("background-color", "red");
    $("div").width(100);
    $("div").height(100);
});

//Fill in the blanks to set the height of the paragraph with the id="demo" to 68px.
//املأ الفراغات لضبط ارتفاع الفقرة بالمعرف = "عرض توضيحي" إلى 68 بكسل.
$("#demo").height(68);


$(function () {
    $("div").css("padding", "5px");
    alert($("div").innerWidth());
});//210

//What is the value of outerHeight() for the paragraph after the following code?
//ما هي قيمة OuterHeight () للفقرة التي تلي الكود التالي؟
$("p").height(84);
$("p").css("margin", 8);
$("p").css("padding", 2);//88
/*
outerHeight=(2*padding) +height. Here (2*2) +84 = 88.Note:margin is not included.
*/


//Similar to the html() method, the css() method can be used to get and set CSS property values. For example:
//على غرار طريقة html () ، يمكن استخدام طريقة css () للحصول على قيم خصائص CSS وتعيينها. على سبيل المثال:
$(function () {
    alert($("p").css("background-color"));
    $("p").css("background-color", "blue");
});
//The code above alerts the background-color property of the paragraph and then sets it to blue.
//يقوم الكود أعلاه بتنبيه خاصية لون الخلفية للفقرة ثم يقوم بتعيينها إلى اللون الأزرق.

//Fill in the blanks to set the font size and color of the paragraph:
//املأ الفراغات لتعيين حجم الخط ولون الفقرة:
$("p").css("font-size", "16pt");
$("p").css("color", "blue");

//Multiple Properties
//خصائص متعددة

//As you can see, the syntax consists of "property":"value" pairs, which are comma separated and enclosed in curly brackets { }.
//كما ترى ، يتكون بناء الجملة من أزواج "الخاصية": "القيمة" ، والتي تكون مفصولة بفواصل ومحاطة بأقواس متعرجة {}.
$(function () {
    $("p").css({ "background-color": "red", "font-size": "200%" });
});
//This will set the color and font-size properties of the paragraph.
//سيؤدي هذا إلى تعيين خصائص اللون وحجم الخط للفقرة.

//You can specify any number of properties using this JSON syntax.
//يمكنك تحديد أي عدد من الخصائص باستخدام صيغة JSON هذه.

//Fill in the blanks to set the color and width property of the div.
//املأ الفراغات لتعيين خاصية color and width الخاصة بـ div.
$("div").css({ "color": "red", "width": "50px" });

//Fill in the blanks to set the color and padding properties of the paragraph:
//املأ الفراغات لتعيين خصائص اللون والحشو للفقرة:
$("p").css({ "color": "blue", "padding": "5px" });

//Fill in the blanks to create a new <p> element, set its height to 50px and add it before the element with id="test".
//املأ الفراغات لإنشاء عنصر <p> جديد ، واضبط ارتفاعه على 50 بكسل وأضفه قبل العنصر بالمعرف = "test".
var e = $("<p></p>").text("Some text");
e.height(50);
$("#test").before(e);
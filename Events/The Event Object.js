//الأنواع
//https://t.me/CsharpAbdullahAlsalem/167

//يقوم بإلغاء العمل الأساسي العمل الأساسي لوسم a
$(function () {
    $("a").click(function (event) {
        alert(event.pageX);
        event.preventDefault();
    });
});
//الكود أعلاه ينبه موضع الماوس في وقت النقر ويمنع اتباع الرابط.
//The code above alerts the mouse position at the time of the click and prevents following the link.
//كما ترى ، يتم تمرير كائن الحدث إلى وظيفة معالج الحدث كوسيطة.
//As you can see, the event object is passed to the event handler function as an argument.

//Fill in the blanks to handle the keydown event on the input field and alert which key was pressed.
//املأ الفراغات للتعامل مع حدث keydown في حقل الإدخال وتنبيه المفتاح الذي تم الضغط عليه.
$("input").keydown(function (event) {alert(event.which);});

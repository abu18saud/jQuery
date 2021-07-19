$(function () {
    var val = $("p").html();
    alert(val);
});

//If you need only the text content, without the HTML markup, you can use the text() method
//إذا كنت تحتاج فقط إلى محتوى النص ، بدون ترميز HTML ، يمكنك استخدام طريقة text ()
$(function () {
    var val = $("p").text();
    alert(val);
});

//The html() and text() methods can be used for all HTML elements that can contain content.
//يمكن استخدام أساليب html () و text () لجميع عناصر HTML التي يمكن أن تحتوي على محتوى.


//Set
$(function () {
    $("#test").text("hello!");
});
//The code above changes the content of the element with id="test" to "hello!".
//يغير الرمز أعلاه محتوى العنصر مع id = "test" إلى "hello!".

//&ملاحظة
//If the content you are setting contains HTML markup, you should use the html() method instead of text().
//إذا كان المحتوى الذي تقوم بإعداده يحتوي على ترميز HTML ، فيجب عليك استخدام طريقة html () بدلاً من النص ().


//Fill in the blanks to change the content of the paragraphs with id="demo" to "<b>Hi</b>" maintaining the HTML markup.
//املأ الفراغات لتغيير محتوى الفقرات بالمعرف = "demo" إلى "<b> مرحبًا </ b>" مع الحفاظ على ترميز HTML.

$(function () {
    $("#demo").html("<b>Hi</b>");
});
//Summary
//https://t.me/CsharpAbdullahAlsalem/161


//The append() method inserts content AT THE END of the selected HTML element. For example:
//تقوم طريقة append () بإدراج المحتوى في نهاية عنصر HTML المحدد. على سبيل المثال:
$(function() {
    $("#demo").append("David");
});

/* ملاحظة
Similarly, the prepend() method inserts content AT THE BEGINNING of the selected element.
You can also use HTML markup for the content.

وبالمثل ، تُدرج طريقة prepend () المحتوى في بداية العنصر المحدد. يمكنك أيضًا استخدام ترميز HTML للمحتوى.
*/


//What is the result of the following code if the HTML contains <p>1</p>?
//ما هي نتيجة الكود التالي إذا احتوى HTML على <p> 1 </p>؟
$("p").append("2");
$("p").prepend("1");//112

//The jQuery after() and before() methods insert content AFTER and BEFORE the selected HTML element. For example:
//تقوم الطريقتان jQuery بعد () وقبل () بإدراج المحتوى بعد عنصر HTML المحدد وقبله. على سبيل المثال:
$(function() {
    $("#demo").before("<i>Some Title</i>");
    $("#demo").after("<b>Welcome</b>");
});


//$$$$$$$$$$$$$$$$$Adding New Elements$$$$$$$$$$$$

//The append(), prepend(), before() and after() methods can also be used to add newly created elements. The easiest way of creating a new HTML element with jQuery is the following:
//يمكن أيضًا استخدام أساليب append () و prepend () و before () و after () لإضافة عناصر تم إنشاؤها حديثًا. أسهل طريقة لإنشاء عنصر HTML جديد باستخدام jQuery هي كما يلي:

$(function() {
    var txt = $("<p></p>").text("Hi");
    $("#demo").after(txt);
});

/*
You can also specify multiple elements as arguments for the before(), after(), append(), prepend() methods by separating them using commas: $("#demo").append(var1, var2, var3).
يمكنك أيضًا تحديد عناصر متعددة كوسيطات للطرق السابقة () ، بعد () ، الإلحاق () ، prepend () عن طريق فصلها باستخدام الفواصل: $ ("# demo"). append (var1، var2، var3).
The above mentioned syntax for creating elements can be used to create any new HTML element, for example $("<div></div>") creates a new div.
يمكن استخدام الصيغة المذكورة أعلاه لإنشاء العناصر لإنشاء أي عنصر HTML جديد ، على سبيل المثال $ ("<div> </div>") ينشئ عنصر div جديدًا.
*/


//Fill in the blanks to create a new <span> element and append it to the element with id="txt".
//املأ الفراغات لإنشاء عنصر <span> جديد وإلحاقه بالعنصر بالمعرف = "txt".

var a = $("<span></span>");
$("#txt").append(a);
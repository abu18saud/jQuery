//The attr() method is used for getting the value of an attribute. For Example:
//يتم استخدام طريقة attr () للحصول على قيمة سمة. على سبيل المثال:
$(function() {
    var val = $("a").attr("href");
    alert(val);
});
//In the code above we selected and alerted the value of the href attribute of the <a> element.
//في الكود أعلاه قمنا باختيار وتنبيه قيمة السمة href للعنصر <a>.


//The attr() method also allows us to set a value for an attribute by specifying it as the second parameter.
//تسمح لنا طريقة attr () أيضًا بتعيين قيمة للسمة عن طريق تحديدها كمعامل ثاني.
$(function() {
    $("a").attr("href", "http://www.jquery.com");
});
//This will change the href attribute of the <a> element to the provided value.
//سيؤدي هذا إلى تغيير سمة href للعنصر <a> إلى القيمة المقدمة.

//Fill in the blanks to change the image to the file "1.jpg".
//املأ الفراغات لتغيير الصورة إلى ملف "1.jpg".
$("img").attr("src", "1.jpg");


//#########################Removing Attributes###########################

//You can also remove attributes from HTML elements. The removeAttr() method is used for removing any attribute of an element. In the example below we remove the border and class attributes of the table
//يمكنك أيضًا إزالة السمات من عناصر HTML. يتم استخدام طريقة removeAttr () لإزالة أي سمة من سمات العنصر. في المثال أدناه نزيل سمات الحدود والفئة من الجدول

$(function() {
    $("table").removeAttr("border");
    $("table").removeAttr("class"); 
});

//Drag and drop from the options below to remove the border attribute of the element with id="text".
//قم بالسحب والإفلات من الخيارات أدناه لإزالة سمة الحدود للعنصر ذي المعرف = "text".
$("#text").removeAttr("border");

//Fill in the blanks to set the alt attribute of the image with id="img", and alert the value of its src attribute.
//املأ الفراغات لتعيين سمة alt للصورة بالمعرف = "img" ، وتنبيه قيمة السمة src الخاصة بها.

$("#img").attr("alt", "Demo");
alert($("#img").attr("src"));
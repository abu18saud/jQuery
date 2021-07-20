//Manipulating CSS

$(function() {
    $("div").addClass("header");
});
//When specifying multiple class names for the addClass method, we need to separate them using:
//عند تحديد أسماء فئات متعددة للتابع addClass ، نحتاج إلى فصلها باستخدام:
//spaces - مسافات


//The above code assigns the div element the class "header".
//يقوم الكود أعلاه بتعيين عنصر div الفئة "header".

//To specify multiple classes within the addClass() method, just separate them using spaces. For example, $("div").addClass("class1 class2 class3").
//لتحديد فئات متعددة في طريقة addClass () ، فقط افصل بينها باستخدام مسافات. على سبيل المثال ، $ ("div"). addClass ("class1 class2 class3").


//Fill in the blanks to add the class names "text" and "menu" to the <p> element.
//املأ الفراغات لإضافة أسماء الفئات "نص" و "قائمة" إلى العنصر <p>.
$("p").addClass("text menu");

//The removeClass() method removes one or more class names from the selected elements.
//تزيل طريقة removeClass () اسم فئة واحد أو أكثر من العناصر المحددة.
$(function() {
    $("div").removeClass("red");
});
//Again, multiple class names can be specified by separating them using spaces.
//مرة أخرى ، يمكن تحديد أسماء فئات متعددة عن طريق فصلها باستخدام مسافات.

//Which class name will the <p class="a b"></p> element have after the following code?
//ما اسم الفئة الذي سيحمله العنصر <p class = "a b"> </p> بعد الكود التالي؟
$("p").addClass("c");
$("p").removeClass("a c"); //b

//toggleClass()
//The toggleClass() method toggles between adding/removing classes from the selected elements, meaning that if the specified class exists for the element, it is removed, and if it does not exist, it is added.
//تقوم طريقة toggleClass () بالتبديل بين إضافة / إزالة الفئات من العناصر المحددة ، مما يعني أنه إذا كانت الفئة المحددة موجودة للعنصر ، فسيتم إزالتها ، وإذا لم تكن موجودة ، تتم إضافتها.
$(function() {
    $("button").click(function() {
        $("p").toggleClass("red");
    });
});
//The code above toggles the class name "red" upon clicking the button.
//يقوم الكود أعلاه بتبديل اسم الفئة "أحمر" عند النقر فوق الزر.

//Will the paragraph have a border after this code?
//هل سيكون للفقرة حدود بعد هذا الرمز؟
/*
<style> 
 .test{ border-style: solid; } 
</style> 
<p>Some text</p> 
<script> 
$(function() {
  $("p").addClass("test"); 
  $("p").toggleClass("test");
}); 
</script>
___________________No_____________________
*/






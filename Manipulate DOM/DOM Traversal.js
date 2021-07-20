//jQuery has many useful methods for DOM traversal.
//The parent() method returns the direct parent element of the selected element. For example:
$(function () {
    var e = $("p").parent();
    e.css("border", "2px solid red");
});
//The code above selects the parent element of the paragraph and sets a red border for it.
//يحدد الكود أعلاه العنصر الأصلي للفقرة ويضع حدًا أحمر له.

//Which element is the parent of the <p> element in the following HTML?
//ما هو العنصر الأصل للعنصر <p> في HTML التالي؟
/*
<div><ul> 
<li><p></p></li>
</ul></div>
>>>><li>
*/

//To get all ancestors of the selected element you can use the parents() method. For example:
//للحصول على جميع أسلاف العنصر المحدد ، يمكنك استخدام طريقة الوالدين (). على سبيل المثال:
$(function () {
    var e = $("p").parents();
    e.css("border", "2px solid red");
});

//للمزيد أنظر إلى هذا المنشور
//https://t.me/CsharpAbdullahAlsalem/164


//Fill in the blanks to select all siblings of the div element and call the hide() method on them.
//املأ الفراغات لتحديد جميع أشقاء عنصر div واستدعاء طريقة hide () عليهم.
var items = $("div").siblings();
items.hide();

/*
The eq() method can be used to select a specific element from multiple selected elements.
For example, if the page contains multiple div elements and we want to select the third one:
يمكن استخدام طريقة eq () لتحديد عنصر معين من عدة عناصر محددة. على سبيل المثال ، إذا كانت الصفحة تحتوي على عناصر div متعددة ونريد تحديد العنصر الثالث:

The index numbers start at 0, so the first element will have the index number 0.
تبدأ أرقام الفهرس من 0 ، لذا فإن العنصر الأول سيكون له رقم الفهرس 0.
*/
$("div").eq(2);

/** How many siblings does the <p> element with the id="txt" have in the following HTML?
 * كم عدد الأشقاء للعنصر <p> بالمعرف = "txt" في HTML التالي؟
 <div>
<p></p>
<p id="txt"></p>
<p></p>
</div>
 * Awnser: 2
 */

/** Fill in the blanks to select the first child of the div element.
 * املأ الفراغات لتحديد الطفل الأول لعنصر div.
 */
$("div").children().eq(0);

/** What is the output of this code?
 * ما هو مخرج هذا الرمز؟
<div><p>1</p></div>
<div>2</div>
<script>
alert($("p").parent().siblings().eq(0).text());
</script>
 * Awnser: 2
 * الكود أعلاه سيتحكم بإخوان الوالد (العمام)
 */

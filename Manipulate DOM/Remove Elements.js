/*We remove selected elements from the DOM using the remove() method.For example:
نقوم بإزالة العناصر المحددة من DOM باستخدام طريقة remove () ، على سبيل المثال:
*/
$(function () {
    $("p").eq(1).remove();
});
/*
You can also use the remove() method on multiple selected elements, for example $("p").remove() removes all paragraphs.
يمكنك أيضًا استخدام طريقة remove () على عدة عناصر محددة ، على سبيل المثال $ ("p"). تزيل إزالة () جميع الفقرات.
*/
//The jQuery remove() method removes the selected element(s), as well as its child elements.
//تزيل طريقة jQuery remove () العنصر (العناصر) المحددة وكذلك العناصر الفرعية الخاصة به.

//Fill in the blanks to remove all siblings of the element with id="txt".
//املأ الفراغات لإزالة جميع أشقاء العنصر بالمعرف = "txt".
$("#txt").siblings().remove();

//Removing Content

//The empty() method is used to remove the child elements of the selected element(s). For example:
//يتم استخدام الطريقة الفارغة () لإزالة العناصر الفرعية للعنصر (العناصر) المحددة. على سبيل المثال:
$(function () {
    $("div").empty();
});

/** Fill in the blanks to empty the second child element of the element with id="nav".
 * املأ الفراغات لإفراغ العنصر الفرعي الثاني للعنصر بالمعرف = "nav".
 */
var e = $("#nav").children();
e.eq(1).empty();

/** Drag and drop from the options below to remove all children of the paragraph tag.
 * قم بالسحب والإفلات من الخيارات أدناه لإزالة جميع العناصر الفرعية لعلامة الفقرة.
 */
 $("p").children().remove();
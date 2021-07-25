/*
We can also trigger events programmatically using the trigger() method. For example, you can trigger a click event without the user actually clicking on an element:
يمكننا أيضًا تشغيل الأحداث برمجيًا باستخدام طريقة المشغل (). على سبيل المثال ، يمكنك تشغيل حدث نقرة دون أن ينقر المستخدم فعليًا على أحد العناصر
*/
$(function () {
    $("div").click(function () {
        alert("Clicked!");
    });
    $("div").trigger("click");
});
//This code triggers the click event for the selected element.
//يقوم هذا الرمز بتشغيل حدث النقر للعنصر المحدد.

/**ملاحظة
 * The trigger() method cannot be used to mimic native browser events, such as clicking on a file input box or an anchor tag. Only events in the jQuery event system can be handled.
 * لا يمكن استخدام طريقة المشغل () لتقليد أحداث المستعرض الأصلي ، مثل النقر فوق مربع إدخال ملف أو علامة الارتساء. يمكن فقط معالجة الأحداث الموجودة في نظام أحداث jQuery.
 */

/**Fill in the blanks to trigger the submit event on the selected element.
 * املأ الفراغات لتشغيل حدث الإرسال على العنصر المحدد.
 */
$("form").trigger("submit");
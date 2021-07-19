//First, let's take a look at an example HTML manipulation with JavaScript. To get the element with the id="start" and change its html to "Go" we will
$("#start").html("Go");
//Another great advantage of jQuery is that you do not need to worry about browser support, your code will run exactly the same in all major browsers, including Internet Explorer 6!

/*
من الممارسات الجيدة الانتظار حتى يتم تحميل مستند HTML
 بالكامل وجاهزًا قبل التعامل معه. لذلك نستخدم الحدث الجاهز لكائن المستند:
*/
$(document).ready(function() {
    // jQuery code goes here
 });
//نظرًا لاستخدام الكود أعلاه في جميع الحالات تقريبًا عند استخدام jQuery ،
// فهناك اختصار مفيد لكتابته:
$(function() {
    // jQuery code goes here
 });
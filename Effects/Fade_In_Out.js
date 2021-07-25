/*
Similar to the hide/show methods, jQuery provides the fadeInfadeOut methods, which fade an element in and out of visibility.
على غرار عمليات إخفاء / إظهار ، يوفر jQuery طرق fadeInfadeOut ، التي تتلاشى داخل وخارج نطاق الرؤية.
Just like the toggle() method switches between hiding and showing, the fadeToggle() method fades in and out.
تمامًا مثل تبديل طريقة () التبديل بين الإخفاء والعرض ، تتلاشى طريقة fadeToggle () للداخل والخارج.
Let's see fadeToggle() in action
دعنا نرى fadeToggle () في العمل
*/
$(function () {
    $("p").click(function () {
        $("div").fadeToggle(1000);
    });
});
/**
 * Just like toggle(), fadeToggle() takes two optional parameters: speed and callback.
 * تمامًا مثل toggle () ، تأخذ fadeToggle () معلمتين اختياريتين: speed و callback.
 * Another method used for fading is fadeTo(), which allows fading to a given opacity (value between 0 and 1). For example: $("div").fadeTo(1500, 0.7);
 * طريقة أخرى مستخدمة للتلاشي هي fadeTo () ، والتي تسمح بالتلاشي إلى عتامة معينة (قيمة بين 0 و 1). على سبيل المثال: $ ("div"). fadeTo (1500، 0.7)؛
 */

//Fill in the blanks to fade the paragraph to 60% opacity in 2 seconds.
//املأ الفراغات لإخفاء الفقرة إلى 60٪ عتامة في ثانيتين.
$("p").fadeTo(2000, 0.6);



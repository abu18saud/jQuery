/**
 * By default, jQuery comes with queue functionality for animations.
 * بشكل افتراضي ، يأتي jQuery مع وظيفة قائمة الانتظار للرسوم المتحركة.
 * This means that if you write multiple animate() calls one after another, jQuery creates an "internal" queue for these method calls. Then it runs the animate calls one-by-one.
 * هذا يعني أنك إذا كتبت عدة استدعاءات animate () واحدة تلو الأخرى ، فإن jQuery تنشئ قائمة انتظار "داخلية" لاستدعاءات الأسلوب هذه. ثم يقوم بتشغيل مكالمات الرسوم المتحركة واحدة تلو الأخرى.
 */
 $(function() {
    var div = $("div");
    div.animate({opacity: 1});
    div.animate({height: '+=100px', width: '+=100px', top: '+=100px'}, 500);
    div.animate({height: '-=100px', width: '-=100px', left: '+=100px'}, 500);
    div.animate({height: '+=100px', width: '+=100px', top: '-=100px'}, 500);
    div.animate({height: '-=100px', width: '-=100px', left: '-=100px'}, 500);
    div.animate({opacity: 0.5});
}); 

/** ملاحظة هامة جداً
 * Remember, to manipulate the position of elements, you need to set the CSS position property of the element to relative, fixed, or absolute.
 * تذكر ، لمعالجة موضع العناصر ، تحتاج إلى تعيين خاصية موضع CSS للعنصر على نسبي أو ثابت أو مطلق.
 * The animate() method, just like the hide/show/fade/slide methods, can take an optional callback function as its parameter, which is executed after the current effect is finished.
 * يمكن لطريقة animate () ، تمامًا مثل طرق إخفاء / إظهار / تتلاشى / شريحة ، أن تأخذ وظيفة رد اتصال اختيارية كمعامل لها ، والتي يتم تنفيذها بعد انتهاء التأثير الحالي.
 */

/**
 * By default, jQuery creates a queue for each animate() call.
 * بشكل افتراضي ، يُنشئ jQuery قائمة انتظار لكل استدعاء animate ().
 * True - صحيح
 */

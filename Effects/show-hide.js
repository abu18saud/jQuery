/*
jQuery has some easy-to-implement effects to create animations.
The hide() and show() methods are used to hide and show the selected elements.
The toggle() method is used to toggle between hiding and showing elements.
يحتوي jQuery على بعض التأثيرات سهلة التنفيذ لإنشاء الرسوم المتحركة.
يتم استخدام أساليب إخفاء () وإظهار () لإخفاء وإظهار العناصر المحددة.
يتم استخدام طريقة toggle () للتبديل بين الإخفاء وإظهار العناصر.
 */
$(function() {
    $("p").click(function() {
        $("div").toggle();
    });
});
/*
The hide/show/toggle methods can take an optional argument, speed, which specifies the animation speed in milliseconds.
For example, let's pass 1000 millisecond as the speed argument to the toggle() method:
يمكن أن تأخذ أساليب إخفاء / إظهار / تبديل وسيطة اختيارية ، السرعة ، والتي تحدد سرعة الحركة بالمللي ثانية.
 على سبيل المثال ، دعنا نمرر 1000 مللي ثانية كوسيطة speed إلى طريقة toggle ():
*/
$(function() {
    $("p").click(function() {
        $("div").toggle(1000);
    });
});
/** The hide/show/toggle methods can also take a second optional parameter callback, which is a function to be executed after the animation completes.
 * يمكن أن تأخذ أساليب إخفاء / إظهار / تبديل أيضًا إعادة استدعاء معلمة اختيارية ثانية ، وهي وظيفة يتم تنفيذها بعد اكتمال الرسم المتحرك.
 */

/**
 * The speed parameter for the toggle() method is in:
 * معلمة السرعة لطريقة toggle () موجودة في:
 * milliseconds - مللي ثانية
 */

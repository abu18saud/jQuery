/**
 * The animate() method lets you animate to a set value, or to a value relative to the current value.
 * تسمح لك طريقة animate () بالتحريك إلى قيمة محددة ، أو إلى قيمة متعلقة بالقيمة الحالية.
 * You need to define the CSS properties to be animated as its parameter in JSON format ("key":"value" pairs).
 * تحتاج إلى تحديد خصائص CSS ليتم تحريكها كمعامل لها بتنسيق JSON (أزواج "key": "value").
 * The second parameter defines the speed of the animation.
 * تحدد المعلمة الثانية سرعة الحركة.
 * For example, the following code animates the width property of the div in 1 second to the value 250px
 * على سبيل المثال ، تقوم الشفرة التالية بتحريك خاصية عرض div في ثانية واحدة إلى القيمة 250 بكسل
 */
$(function () {
    $("div").click(function () {
        $("div").animate({ width: '250px' }, 1000);
    });
});
/**
 * You can animate any CSS property using the above mentioned syntax, but there is one important thing to remember: all property names must be camel-cased when used with the animate() method (camelCase is the practice of writing compound words or phrases such that each word or abbreviation begins with a capital letter with the first word in lowercase).
 * يمكنك تحريك أي خاصية CSS باستخدام الصيغة المذكورة أعلاه ، ولكن هناك شيء واحد مهم يجب تذكره: يجب أن تكون جميع أسماء الخصائص مغلفة عند استخدامها مع طريقة animate () (camelCase هي ممارسة كتابة الكلمات أو العبارات المركبة مثل تبدأ كل كلمة أو اختصار بحرف كبير مع الكلمة الأولى بحروف صغيرة).
 * You will need to write paddingLeft instead of padding-left, marginRight instead of margin-right, and so on.
 * ستحتاج إلى كتابة paddingLeft بدلاً من padding-left و marginRight بدلاً من margin-right وما إلى ذلك.
 */

/**
 * Which of the following can be used with the animate() method?
 * أي مما يلي يمكن استخدامه مع طريقة animate ()؟
 * 
 * paddingLeft
 */

/**
 * Multiple properties can be animated at the same time by separating them with commas.
 * يمكن تحريك الخصائص المتعددة في نفس الوقت عن طريق فصلها بفاصلات.
 */
$(function () {
    $("div").click(function () {
        $("div").animate({
            width: '250px',
            height: '250px'
        }, 1000);
    });
});

/**
 * It is also possible to define relative values (the value is then relative to the element's current value). This is done by putting += or -= in front of the value:
 * من الممكن أيضًا تحديد القيم النسبية (تكون القيمة إذن مرتبطة بالقيمة الحالية للعنصر). يتم ذلك بوضع + = أو - = أمام القيمة:
 */
$(function () {
    $("div").click(function () {
        $("div").animate({
            width: '+=250px',
            height: '+=250px'
        }, 1000);
    });
});

/** ملاحظة هامة
 * To stop an animation before it is finished, jQuery provides the stop() method.
 * لإيقاف رسم متحرك قبل انتهائه ، يوفر jQuery طريقة الإيقاف ().
 */

/**
 * Fill in the blanks to animate the opacity and height properties of the div element in 5 seconds.
 * املأ الفراغات لتحريك خصائص التعتيم والارتفاع لعنصر div في 5 ثوانٍ.
 */
$("div").animate({ opacity: 0.5, height: '+=100px' }, 5000);
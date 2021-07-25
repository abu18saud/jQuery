/**
 * The slideUp() and slideDown() methods are used to create a sliding effect on elements.
 * يتم استخدام أساليب slideUp () و slideDown () لإنشاء تأثير انزلاق على العناصر.
 * Again, similar to the previous toggle methods, the slideToggle() method switches between the sliding effects and can take two optional parameters: speed and callback.
 * مرة أخرى ، على غرار طرق التبديل السابقة ، تقوم طريقة slideToggle () بالتبديل بين تأثيرات الانزلاق ويمكن أن تأخذ معلمتين اختياريتين: speed and callback.
 */
$(function () {
    $("p").click(function () {
        $("div").slideToggle(500);
    });
});
/**
 * Fill in the blanks to slide down the div element in 3 seconds upon clicking on the paragraph.
 * املأ الفراغات لتحريك عنصر div لأسفل في 3 ثوانٍ عند النقر على الفقرة.
 */
$("p").click(function () { $("div").slideDown(3000); });
/**
 * Fill in the blanks to hide all paragraphs upon clicking the div element.
 * املأ الفراغات لإخفاء جميع الفقرات عند النقر فوق عنصر div.
 */
$("div").click(function () { $("p").hide(); });
/**
 * For how many seconds will the following animation group run?
 * كم ثانية سيتم تشغيل مجموعة الرسوم المتحركة التالية؟
 */
$("p").animate({ height: "10px" }, 1000);
$("p").animate({ width: "10px" }, 1000);
$("p").animate({ opacity: 0.5 }, 3000);
//٥ ثواني

/**
 * Fill in the blanks to create a valid animation.
 * املأ الفراغات لإنشاء رسم متحرك صالح.
 */
$("p").animate({ height: "10px", width: "+=100px", opacity: 0.5 }, 1000);

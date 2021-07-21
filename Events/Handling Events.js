//old
window.onload = function () {
    var x = document.getElementById("demo");
    x.onclick = function () {
        document.body.innerHTML = Date();
    }
};
//New - with jQuery
$(function () {
    $("#demo").click(function () {
        $("body").html(Date());
    });
});

//الأحداث الأكثر استخداماً تجدها في الرابط أدناه
//https://t.me/CsharpAbdullahAlsalem/166

/** As an example, let's change the content of a div when the user types in an input field. To do that, we need to handle the keydown event, which occurs when a key on the keyboard is pressed:
 * كمثال ، دعنا نغير محتوى div عندما يكتب المستخدم في حقل إدخال. للقيام بذلك ، نحتاج إلى التعامل مع حدث keydown ، والذي يحدث عند الضغط على مفتاح في لوحة المفاتيح:
 */
$(function () {
    $("#name").keydown(function () {
        $("#msg").html($("#name").val());
    });
});

/** Fill in the blanks to handle the click event on the paragraph tag.
 * املأ الفراغات للتعامل مع حدث النقر على علامة الفقرة.
 */
$("p").click(function () { alert("Clicked!"); });

//on()
/** Another way to handle events in jQuery is by using the on() method.
 * هناك طريقة أخرى للتعامل مع الأحداث في jQuery وهي استخدام طريقة on ().
 */

$(function () {
    $("p").on("click", function () {
        alert("clicked");
    });
});
//The on() method is useful for binding the same handler function to multiple events. You can provide multiple event names separated by spaces as the first argument. For example, you could use the same event handler for the click and dblclick events.
//طريقة on () مفيدة لربط نفس وظيفة المعالج بأحداث متعددة. يمكنك توفير أسماء أحداث متعددة مفصولة بمسافات كوسيطة أولى. على سبيل المثال ، يمكنك استخدام نفس معالج الأحداث لأحداث click و dblclick.

/** Fill in the blanks to handle the submit event for the form element using the on() method:
 * املأ الفراغات للتعامل مع حدث الإرسال لعنصر النموذج باستخدام طريقة on ():
 */

$("form").on("submit", function () {
    // some code
});

//off()
/** You can remove event handlers using the off() method.
 * يمكنك إزالة معالجات الأحداث باستخدام طريقة off ().
 */
$(function () {
    $("div").on("click", function () {
        alert('Hi there!');
    });
    $("div").off("click");
});
/** The argument of the off() method is the event name you want to remove the handler for.
 * وسيطة طريقة off () هي اسم الحدث الذي تريد إزالة المعالج له.
 */

/** Fill in the blanks to remove the event handler for the focus event on the element with id="test".
 * املأ الفراغات لإزالة معالج الحدث لحدث التركيز على العنصر ذي المعرف = "test".
 */
$("#test").off("focus");








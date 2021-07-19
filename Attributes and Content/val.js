//Another useful method is the val() method, which allows us to get and set the values of form fields, such as textboxes, dropdowns, and similar inputs. For Example:
//طريقة أخرى مفيدة هي طريقة val () ، والتي تتيح لنا الحصول على قيم حقول النموذج وتعيينها ، مثل مربعات النص والقوائم المنسدلة والمدخلات المماثلة. على سبيل المثال:

$(function () {
    alert($("#name").val());
});
//Similarly, you can set the value for the field by providing it as a parameter to the val() method.
//وبالمثل ، يمكنك تعيين قيمة الحقل من خلال توفيره كمعامل لطريقة val ().

//Rearrange the code to get the value of the form field and set it as the value of the paragraph with id="demo".
//أعد ترتيب الكود للحصول على قيمة حقل النموذج وتعيينه كقيمة للفقرة بالمعرف = "demo"
$(function () {
    var t = $("#user").val();
    $("#demo").text(t);
});

//Summary
//الملخص
//https://t.me/CsharpAbdullahAlsalem/160
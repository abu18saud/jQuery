/*
Let's create a To-Do list project using the concepts we have learned.
The To-Do list will be able to add new items to a list, as well as remove existing items.

لنقم بإنشاء مشروع قائمة المهام باستخدام المفاهيم التي تعلمناها.
 ستكون قائمة المهام قادرة على إضافة عناصر جديدة إلى القائمة ، وكذلك إزالة العناصر الموجودة.

 First, we create the HTML:
أولاً ، نقوم بإنشاء HTML:

<h1>My To-Do List</h1>
<input type="text" placeholder="New item" />
<button id="add">Add</button>
<ol id="mylist"></ol>

Clicking the button should add the value of the input field to our <ol> list.
يجب أن يؤدي النقر فوق الزر إلى إضافة قيمة حقل الإدخال إلى قائمة <ol> الخاصة بنا.
*/

//Fill in the blanks:
//إملأ الفراغات:
/*
<h1>Some heading</h1>
<ol>
  <li>One</li>
  <li>Two</li>
</ol>
*/


/**
 * Now, having the HTML ready, we can start writing our jQuery code.
 * الآن ، بعد أن أصبح HTML جاهزًا ، يمكننا البدء في كتابة كود jQuery الخاص بنا.
 * First, we handle the click event for the button:
 * أولاً ، نتعامل مع حدث النقر للزر:
 */
$(function () {
    $("#add").on("click", function () {
        //event handler
        var val = $("input").val();
        if (val !== '') {
            var elem = $("<li></li>").text(val);
            $(elem).append("<button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("input").val(""); //clear the input
        }
    });
});
/** The code above takes the value of the input field, assigns it to the val variable. The if statement checks that the value is not blank and then creates a new <li> element. A button for removing it is added, after which the newly created element is added to the <ol id="mylist"> list.
 * يأخذ الكود أعلاه قيمة حقل الإدخال ، ويخصصه لمتغير val. تتحقق عبارة if من أن القيمة ليست فارغة ثم تنشئ عنصر <li> جديدًا. تتم إضافة زر لإزالته ، وبعد ذلك يتم إضافة العنصر الذي تم إنشاؤه حديثًا إلى قائمة <ol id = "mylist">.
 * The remove button is not working yet. We will handle it in the next section!
 * زر الإزالة لا يعمل بعد. سنتعامل معها في القسم التالي!
 */


/** Fill in the blanks to create a new div element and add it to the element with id="test".
 * املأ الفراغات لإنشاء عنصر div جديد وإضافته إلى العنصر بالمعرف = "test".
 */
var e = $("<div></div>");
$("#test").append(e);


/**
 * All that is left to do is handle the click event on the class="rem" button and remove the corresponding <li> element from the list.
 * كل ما تبقى للقيام به هو معالجة حدث النقر على زر class = "rem" وإزالة عنصر <li> المقابل من القائمة.
 */
$(".rem").on("click", function () {
    $(this).parent().remove();
});

/**
 * Remember, this is the current object. The code above removes the parent of the current object, which in our case is the parent of the remove button, the <li> element.
 * تذكر أن هذا هو الكائن الحالي. يزيل الكود أعلاه أصل الكائن الحالي ، والذي هو في حالتنا أصل زر الإزالة ، العنصر <li>.
 * أدناه الكود كاملاً
 */
$(function () {
    $("#add").on("click", function () {
        var val = $("input").val();
        if (val !== '') {
            var elem = $("<li></li>").text(val);
            $(elem).append("<button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("input").val("");
            $(".rem").on("click", function () {
                $(this).parent().remove();
            });
        }
    });
});
/**
 * The To-Do List was just a short demonstration of how to handle events and build a simple project.
 * كانت قائمة المهام مجرد عرض توضيحي قصير لكيفية التعامل مع الأحداث وبناء مشروع بسيط.
 */





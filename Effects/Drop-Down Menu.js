/**
 * Let's create a simple drop-down menu that will open upon clicking on the menu item.
 * لنقم بإنشاء قائمة منسدلة بسيطة تفتح عند النقر فوق عنصر القائمة.
 <div class="menu">
  <div id="item">Drop-Down</div>
  <div id="submenu">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
#css
#item {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}
#item:hover, #item:focus {
    background-color: #3e8e41;
}
.menu {
    position: relative;
    display: inline-block;
}
#submenu {
    display: none;
    position: absolute;
    background-color: #3e8e41;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
#submenu a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}
#submenu a:hover {
    background-color: #4CAF50
}
 */
$(function () {
    $("#item").click(function () {
        $("#submenu").slideToggle(500);
    });
});
/**
 * The code above handles the click event of the id="item" element and opens/closes the submenu in 500 milliseconds.
 * يعالج الكود أعلاه حدث النقر لعنصر id = "item" ويفتح / يغلق القائمة الفرعية في 500 مللي ثانية.
 * Run the code to see it in action. You can also check out the CSS used for styling the items.
 * قم بتشغيل الكود لرؤيته أثناء العمل. يمكنك أيضًا التحقق من CSS المستخدم لتصميم العناصر.
 */

/**
 * Fill in the blanks to hide the element in 1.5 seconds.
 * املأ الفراغات لإخفاء العنصر في 1.5 ثانية.
 */
 $("p").hide(1500);
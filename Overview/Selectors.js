$("p").hide()  // hides all <p> elements
$(".demo").hide()  // hides all elements with class="demo"
$("#demo").hide()  // hides the element with id="demo"
//Selectors
//$("div")  // selects all <div> elements
//$("#test") // select the element with the id="test"
//$(".menu") //selects all elements with class="menu"

//You can also use the following syntax for selectors:
$("div.menu")  // all <div> elements with class="menu"

$("p:first")  // the first <p> element

$("h1, p") // all <h1> and all <p> elements

$("div p") // all <p> elements that are descendants of a <div> element

$("*")  // all elements of the DOM

//Selectors make accessing HTML DOM elements easy compared to pure JavaScript.

//احصل على المزيد من المحددات هنا
//https://t.me/CsharpAbdullahAlsalem/159

//حدد جميع العناصر التي هي عناصر فرعية مباشرة لعناصر div.
$("div > *")
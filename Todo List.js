/* 
Check off specific todos by clicking
Previous code:
$("li").click(function() {
	$(this).toggleClass("completed");
});
If we swap $("li").click() for $("ul").on("click, li"), then this will handle all future potential li's in ul's. Instead, previously, the code is only for pre-existing li's.
*/
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

/* 
Click on X to first fade out then remove the parent 'li'. 
Similarly, previous code:
$("span").click(...)
*/
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500,function() {
  	$(this).remove();
  });
	event.StopPropagation(); // This stops the method from bubbling up to other elements
});


$("input[type='text']").keypress(function(event) {
	if(event.which === 13) { // 'which' property on the keypress object, corresponds to key that was pressed
  	// grabbing new todo text from input
  	var toDoText = $(this).val(); // recall, this is the value of 'this'
    // clear the input
    $(this).val("");
  	// create a new li and add to ul through 'appending'
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + toDoText + "</li>");
  }
})

// Toggle hiding the input when we press fa-plus
$(".fa-plus").click(function() {
	$("input[type=text]").fadeToggle();
})

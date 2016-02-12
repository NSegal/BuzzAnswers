// Get all the answers and save as a variable
var answers=document.querySelectorAll(".quiz_result_area, .quiz_tally_results, .quiz_result");

// Then for every possible answer...
for(var i=0;i<answers.length;i++){
	
	// Log all possible answer fields to the console 
	console.log(answers[i]);

	// Populate the SRC attribute of the IMG tags using the values in their data:src attribute so that the images will actually work and display.
	var newSrc = answers[i].getElementsByClassName("quiz_img_and_source")[0].querySelectorAll('img.result_img')[0].getAttribute('data:src');
	answers[i].getElementsByClassName("quiz_img_and_source")[0].querySelectorAll('img.result_img')[0].setAttribute("src", newSrc);

	// Flip the CSS switch from display:none to display:block and unhide the answer text
	if(answers[i].style){
		answers[i].style.display="block"
	}
}
	// Scroll down the page to those answers!
	document.querySelector(".quiz_result_area").id="quiz_results";
	window.location.hash="quiz_results";

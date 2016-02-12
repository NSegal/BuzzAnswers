function showAnswers (){

	// Get all the answers and save as a variable
	var answers=document.querySelectorAll(".quiz_result_area, .quiz_tally_results, .quiz_result");

	// Then for every possible answer...
	for(var i=0;i<answers.length;i++) {
		
		// Log all possible answer fields to the console 
		console.log(answers[i]);

		// Populate the SRC attribute of the IMG tags using the values in their data:src attribute so that the images will actually work and display.
		var newSrc = answers[i].getElementsByClassName("quiz_img_and_source")[0].querySelectorAll('img.result_img')[0].getAttribute('data:src');
		answers[i].getElementsByClassName("quiz_img_and_source")[0].querySelectorAll('img.result_img')[0].setAttribute("src", newSrc);

		// Flip the CSS switch from display:none to display:block and unhide the answer text
		if(answers[i].style) {
			answers[i].style.display="block"
		}
	}

	// Scroll down the page to those answers!
	document.querySelector(".quiz_result_area").id="quiz_results";
	window.location.hash="quiz_results";
}

showAnswers()

function displayQuestionPoint() {

	var quiz = {};
	  // Use last quiz
	  for (k in bf_quiz.quizes) {
	    quiz = bf_quiz.quizes[k];
	    //console.log('quiz: ', quiz);
	    //console.log('k: ', k);
	   
	}
	var answerList = [];

	var options = [];
	for (k in quiz.results) {
	  options.push(quiz.results[k].el.getAttribute("rel:name"));
	  answerList[k] = quiz.results[k].el.getAttribute("rel:name");
	}

	for (x = 0; x < answerList.length; x++){

		//console.log(answerList[x]);
		var string = "li[rel\\:personality_index='" + x + "']";
		//console.log(string);
		els = document.querySelectorAll(string)
		for (y = 0; y < els.length; y++) {
			els[y].querySelectorAll("span.quiz_checkbox_wrp")[0].innerHTML = '<span class="quiz_checkbox quiz-checkbox fa"></span>' + "Answer: " + answerList[x] ;
		}


	}

}

function makeForm() {

	function makeForm() {
    var div = document.createElement("div"),
     clear = document.createElement("div");
    div.setAttribute("id", "buzzanswers");
	    div.style.cssText = "z-index:9999;opacity:0.98;position:fixed;height:40px;background:#A3CFBC;border-bottom:1px solid #50646A;width:100%;padding:6px 6px 10px 6px;";
	    clear.style.cssText = "float:right;width:100px;text-align:center;cursor:pointer;margin-right:20px;background:#fff;border:1px solid gray;padding:4px 3px;";
}
$(document).ready(function () { 
	$.getJSON("json/quiz.json", function(data) {
		$(title1).append(data.meta.title);
		//for(i = 0; i < data.quizlist.length; i++) {
			
		//}

		//numberOfQuestions = questionBank.length;
		//alert();
	})

});
/*
	function displayQuestion(){
		var rnd = Math.ceil(Math.random() * 3); 
		var q1;
		var q2;
		var q3;

		if (rnd == 1) {
			q1 = questionBank[questionNumber][1];
			q2 = questionBank[questionNumber][2];
			q3 = questionBank[questionNumber][3];
		}

		if (rnd == 2) {
			q2 = questionBank[questionNumber][1];
			q3 = questionBank[questionNumber][2];
			q1 = questionBank[questionNumber][3];
		}

		if (rnd == 3) {
			q3 = questionBank[questionNumber][1];
			q1 = questionBank[questionNumber][2];
			q2 = questionBank[questionNumber][3];
		}

		$(stage).append('<div class = "questionText">' + questionBank[questionNumber][0] + '</div><div id= "1" class="option">' + q1 + '</div> <div id="2" class="option">' + q2 + '</div> <div id="3" class="option">' + q3 + '</div>');

		$('.option').click(function() {
			if (questionLock == false) {
				questionLock = true; 
				//correct answer
				if (this.id == rnd) {
					$(stage).append('<div class="feedback1">CORRECT</div>');
					score++;
				}
				//wrong answer 
				if(this.id != rnd) {
					$(stage).append('<div class="feedback2">WRONG</div>');
			}
		//setTimeout(function(){changeQuestion()},1000);
		}})
	}//display question
	*/
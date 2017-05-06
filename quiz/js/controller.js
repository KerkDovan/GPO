function main() {
	console.log('JS Loaded!');

	var quiz_title;
	var quiz_desc;
	var quiz_ref;
	var quiz_testtype;

	var quiz_questions = new Array();
	var number_of_questions;

	$.getJSON('json/quiz.json', function(data) {
		quiz_title = data.meta.title;
		quiz_desc = data.meta.description;
		quiz_ref = data.meta.reference;
		quiz_testtype = data.meta.testtype;

		for (i = 0; i < data.questions.length; i++) {
			quiz_questions[i] = new Array;
			quiz_questions[i][0] = data.questions[i].question;
		}
		number_of_questions = quiz_questions.length;
	})

	console.log(quiz_title);

}
$(document).ready(main)
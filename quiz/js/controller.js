var quiz_title;
var quiz_desc;
var quiz_ref;
var quiz_testtype;

var quiz_questions = new Array();
var number_of_questions;

$(document).ready($.getJSON('json/quiz.json', function (data) {
	quiz_title = data.title;
	quiz_desc = data.description;
	quiz_ref = data.reference;
	quiz_testtype = data.testtype;

	for (i = 0; i < data.questions.length; i++) {
		quiz_questions[i] = new Array;
		quiz_questions[i][0] = data.questions[i].question;
		for (j = 0; j < data.questions[i].options.length; j++) {
			quiz_questions[i][j + 1] = data.questions[i].options[j];
		}
	}
	number_of_questions = quiz_questions.length;

	$('title').text(quiz_title);
	print_quiz();
}))

function print_quiz() {
	$('#quiz_title').text(quiz_title);
	$('#quiz_desc').text(quiz_desc);
	$('#quiz_ref').text(quiz_ref);
	$('#quiz_ref').append('<br/><br/>');
	for (i = 0; i < number_of_questions; i++) {
		$('#quiz_questions').append('<div>');
		$('#quiz_questions').append(quiz_questions[i][0]);
		$('#quiz_questions').append('<p>');
		for (j = 1; j < quiz_questions[i].length; j++) {
			$('#quiz_questions').append(
				'<input type="checkbox" name="option"' + j + ' value="a' + j + '">' + quiz_questions[i][j] + '<br/>');
		}
		$('#quiz_questions').append('</p>');
		$('#quiz_questions').append('</div><br/>');
	}

}
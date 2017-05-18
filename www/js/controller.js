var quiz_title;
var quiz_desc;
var quiz_ref;
var quiz_testtype;

var quiz_questions = new Array();

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

	print_quiz();
}))

function print_quiz() {
	$('title').text(quiz_title);
	$('#quiz_title').text(quiz_title);
	$('#quiz_desc').text(quiz_desc);
	$('#quiz_ref').text(quiz_ref);

	var input_type;
	switch (quiz_testtype) {
		case 'multi':
			input_type = 'checkbox';
			break;
		case 'single':
			input_type = 'radio';
			break;
		case 'esse':
			input_type = 'text';
			break;
		default:
			input_type = 'undefined';
			break;
	}

	if (input_type == 'checkbox' || input_type == 'radio') {
		for (i = 0; i < quiz_questions.length; i++) {
			$('#quiz_questions').append('<p>' + quiz_questions[i][0]);
			for (j = 1; j < quiz_questions[i].length; j++) {
				$('#quiz_questions').append(
					'<input type="' + input_type + '" ' +
					'name="question' + i + '" ' +
					'value="a' + j + '">' +
					quiz_questions[i][j] + '<br/>');
			}
		}
	}

	if (input_type == 'text') {
		$('#quiz_questions').append(
			'<p><textarea></textarea></p>'
		)
	}

}
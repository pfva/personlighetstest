$(document).on("click", "#instructions-button", function(){
	$('#test-instructions').fadeOut("slow", function(){
		$('#test-questions').show();
	});
});

function renderQuestions(test){
	let that = this;
	$.getJSON('/json/test.json', function(data){
		that.questions = data.questions;
	});

	$('.question-start').html(`${this.questions[0].q}`);
}

renderQuestions();
// $.getJSON('/json/test.json', renderQuestions);
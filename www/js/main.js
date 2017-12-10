$(document).on("click", "#instructions-button", function(){
	$('#test-instructions').fadeOut("slow", function(){
		$('#test-questions').show();
	});
});
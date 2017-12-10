$(document).on("click", "#instructions-button", function(){
	$('.card-body').fadeOut("slow", function(){
		$('.card-content').append(`
			<div class="card-body">
				<h4 class="card-title">Test</h4>
				<p class="card-text">Nu börjar personlighetstestet.</p>
			</div>`);
	});
});
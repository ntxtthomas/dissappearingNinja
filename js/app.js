$(document).ready(function(){
	
	$('.git').click(function(){
		$(this).hide();
	})
	$('.got').click(function(){
		$(this).hide();
	})
	$('#restore').click(function(){
		$('.git').show();
		$('.got').show();
	})
});
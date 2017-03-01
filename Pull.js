$(document).ready(function(){

	$('#container ul.tabs a').click(function(e){
		
		e.preventDefault();


		$('#container > div').hide().filter(this.hash).show();

		$('#container ul.tabs a').removeClass('selected');
		

		$(this).addClass('selected');

	}).filter(':first').click();
	//no Idea how any of this works
	$('#button').click(function(){
		distance = $('#distance').val();
		mass1 = $('#mass1').val();
		mass2 = $('#mass2').val();
		
		
		
			
		$('#print').html( parseFloat(distance) + parseFloat(mass1) + parseFloat(mass2));
		
	});
	
	
});
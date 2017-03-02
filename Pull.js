$(document).ready(function(){

	$('#container ul.tabs a').click(function(e){
		
		e.preventDefault();


		$('#container > div').hide().filter(this.hash).show();
        //

		$('#container ul.tabs a').removeClass('selected');
		//This clears the "selected" class from all of the links on click.

		$(this).addClass('selected');
        // this adds a "selected" class to the current tab, allowing me to edit CSS rules on the selected tab only.
        
        
	}).filter(':first').click();
	//This line programatically clicks the first tab on load.
//This is from an in class example    
    
    
	$('#button').click(function(){
		distance = parseFloat($('#distance').val());
		mass1 = parseFloat($('#mass1').val());
		mass2 = parseFloat($('#mass2').val());
        //This is where I pull all my data
		
		
		
			
		$('#print').html((0.00000000006673 * mass1 * mass2/(distance * distance) + " N"));
		
	});
	
	
});
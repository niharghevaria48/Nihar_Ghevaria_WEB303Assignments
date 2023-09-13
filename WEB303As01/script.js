/*
	WEB 303 Assignment 1 - jQuery
	Nihar Ghevaria (0806797)
*/
$(document).ready(function(){
	
	$('#yearly-salary').on('change',function(){
		
		 $salary = $('#yearly-salary').val();
		 $('#percent').on('change',function(){
			$percent = $('#percent').val();
			 $amountSpend = ($salary * $percent)/100;
			
			$amount = $amountSpend.toFixed(2);
			
			$('#amount').html('$'+$amount);
	   })
   
	})	
	
	
})


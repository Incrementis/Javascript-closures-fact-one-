function Calculate()
{
	
	var result 		= 0;
	var span		= document.getElementById('result');
	
	//Initialize first operand
	function initOP_One()
	{
		var operand_one = +document.getElementById('opOne').value;
		
		//Initialize second operand
		function initOP_Two()
		{
			
			var operand_two = +document.getElementById('opTwo').value;
			
			//Initialize third operand
			function initOP_Three()
			{
				
				var operand_three = +document.getElementById('opThree').value;
				
				
				//Calculate the result
				function Result()
				{
					/*
					ATTENTION: 
					Even though all variables are not declared or initialized within "Result",
					it still has access to them.
					*/
					result = operand_one + operand_two - operand_three;
				}
				
				
				Result();
			}
			
			
			initOP_Three();
			
		}
		
		initOP_Two();
		
	}
	
	initOP_One();
	
	//Showing result in browser
	span.innerHTML = result; 
}


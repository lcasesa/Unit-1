// defining variable cityPop, function to create a table with cities and their populations
var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

// function to add columns to table based on city 
function addColumns(cityPop){
    //querySelector used instead of getElementById 
    document.querySelectorAll("tr").forEach(function(row, i){
		// if statement, defines i
    	if (i == 0){

    		row.insertAdjacntHTML('beforeend', '<th>City Size</th>');
    	} else {
		// defining variable outside of statement
    		var citySize;
			// if statement that categorizes any cityPop under 100000 as 'Small'
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
			// else if statement that categorizes any cityPop under 500000 but larger than 100000 as 'Medium'
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
			// else statement that categorizes any cityPop over 500000 as 'Large'
    		} else {
    			citySize = 'Large';
    		};
			// 
			row.insertAdjacntHTML = '<td' + citySize + '</td>';
    	};
    });
};

function addEvents(){

	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += "random";

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};

		document.querySelector("table").color = color;
	});

	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme)
};
$(document).ready(function() {

$('#graph').append('<img id="graphWard1" src="Age/Ward1.PNG" />');

	$('.carousel').carousel({
	  interval: 2000
	})
});

function showData() {
	var ctr = ctr + 1;

	if(ctr % 2 == 0){
		$('#graph').append('<img id="graphWard1" src="Age/Ward1.PNG" />');
	}else{
		$('#graph').remove('<img id="graphWard1" src="Age/Ward1.PNG" />');
	}

}

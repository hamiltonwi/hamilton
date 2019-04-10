var ctr1=0;
var ctr2=0;
var ctr3=0;
var ctr4=0;
var ctr5=0;
var ctr6=0;
var ctr7=0;
var ctr8=0;
var ctr9=0;
var ctr10=0;
var ctr11=0;
var ctr12=0;
var ctr13=0;
var ctr14=0;
var ctr15=0;

$(document).ready(function() {
$('#graph').append('<img id="graphWard1" src="Age/Ward1.PNG" />');
$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 1 the highest population in age is 20-29 years old.</caption>.");
$('#graph').append($('<img>',{id:'graphWard1Gender',src:'Gender/Ward1.PNG'}))
$("#graph").append(" <caption style='width:500px;'>Ward 1 has a higher female to male ratio as well higher average population of females than Hamilton.</caption>.");
$('#graph').append($('<img>',{id:'graphWard1Job',src:'Job/Ward1.PNG'}))
$("#graph").append(" <caption style='width:500px;'>Higher average of educational and health jobs.</caption>.");
$('#graph').append($('<img>',{id:'graphWard1Commute',src:'Commute/Ward1.PNG'}))
$("#graph").append(" <caption style='width:500px;'>More people enjoy walking, cycling, and using the public bus.</caption>.");

	$('.carousel').carousel({
	  interval: 2000
	})
});

function showData1() {
  $("#graph").empty();
	ctr1++;
	if(ctr1 % 2 == 0){
		$('#graph').append($('<img>',{id:'graphWard1Age',src:'Age/Ward1.PNG'}))
		$("#graph").append(" <caption style='width:500px;'>Specifically to Ward 1 the highest population in age is 20-29 years old.</caption>.");
		$('#graph').append($('<img>',{id:'graphWard1Gender',src:'Gender/Ward1.PNG'}))
		$("#graph").append(" <caption style='width:500px;'>Ward 1 has a higher female to male ratio as well higher average population of females than Hamilton.</caption>.");
		$('#graph').append($('<img>',{id:'graphWard1Job',src:'Job/Ward1.PNG'}))
		$("#graph").append(" <caption style='width:500px;'>Higher average of educational and health jobs.</caption>.");
		$('#graph').append($('<img>',{id:'graphWard1Commute',src:'Commute/Ward1.PNG'}))
		$("#graph").append(" <caption style='width:500px;'>More people enjoy walking, cycling, and using the public bus.</caption>.");
		$('#graph').append($('<img>',{id:'graphWard1Dwelling',src:'Dwelling/Ward1.PNG'}))
		$("#graph").append(" <caption style='width:500px;'>More people enjoy walking, cycling, and using the public bus.</caption>.");
	}else{
		$("#graph").empty();
	}

}

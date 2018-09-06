// JavaScript Document

/*Prompt starts*/

	function myPrompt() { "use strict";
    var txt;
    var person = prompt("Please enter your name:", "Harry Potter");
    if (person === null || person === "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = txt;
}

/*Prompt ends*/

/*Alert starts*/

	function messageWindow() { "use strict";
    alert("I created an alert box!");
}

/*Alert ends*/

/*Numerical Variable starts - can't get Number or Strings to work?!
	var x = 5;
	var y = 6;
	var z = x + y;
	document.getElementById("number").innerHTML =
	"The value of z is: " + z; }
	
/*Numerical Variable ends*/

var x = "John Doe";  // String written inside quotes
document.getElementById("demo").innerHTML = x;
	

/*Operator starts*/

function myOperate() { "use strict";
    var y = 5;
    var x = y + 2;
    document.getElementById("operator").innerHTML = x;
}

/*Operator ends*/

/*If Statement starts*/

function myGreet() { 
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
	document.getElementById("statement").innerHTML = greeting;
}


/*If Statement ends*/
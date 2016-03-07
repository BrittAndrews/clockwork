var vTime, vColor, vHardmode;

// cHardmode = document.querySelector(".hardmode");

vTime = document.querySelector(".time");



function currentFunction (){
	var current = new Date();
	var hours = current.getHours();
	var minutes = current.getMinutes();
	var seconds = current.getSeconds();

	hours = (hours > 12 ? hours - 12 : hours);

	hours = ( hours < 10 ? "0" : "" ) + hours;
	minutes = ( minutes < 10 ? "0" : "" ) + minutes;
	seconds = ( seconds < 10 ? "0" : "" ) + seconds;

	vTime.innerHTML = hours + ":" + minutes + ":" + seconds;
}

var intID = window.setInterval(currentFunction, 1000);



//////////////////////////////////////////////////





vColor = document.querySelector('.color');
vColor.style.backgroundColor = 'red';
vColor.style.color = 'orange';




function colorFunction (){
	var colorCurrent = new Date();
	var colorHours = colorCurrent.getHours();
	var colorMinutes = colorCurrent.getMinutes();
	var colorSeconds = colorCurrent.getSeconds();

	colorHours = (colorHours > 12 ? colorHours - 12 : colorHours);

	colorHours = ( colorHours < 10 ? "0" : "" ) + colorHours;
	colorMinutes = ( colorMinutes < 10 ? "0" : "" ) + colorMinutes;
	colorSeconds = ( colorSeconds < 10 ? "0" : "" ) + colorSeconds;

	vColor.innerHTML = "#" + colorHours + colorMinutes + colorSeconds;


}


var intID = window.setInterval(colorFunction, 1000);



////////


// function updatedColor (){
// 	var red = colorFunction();
// }

// document.querySelector('.color').style.backgroundColor = # red;


// var intID2 = window.setInterval(updatedColor, 1000);







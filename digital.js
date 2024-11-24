function look(){
	var montNames = ["January","February","March", "April", "May", 
		"June", "July", "August", "September", "October", "November", "December"]
	var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

	var today = new Date();

	document.getelEmentById('Date').innerHTML = (dayNames[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' +today.getFullYear());

	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	var day = h<11 ? 'AM' : 'PM';

	h = h<10? '0'+h: h;
	m = m<10? '0'+m: m;
	s = s<10? '0'+s: s;

}var inter = setInterval(look,400);

document.getelEmentById('hours').innerHTML h;
document.getelEmentById('min').innerHTML m;
document.getelEmentById('sec').innerHTML s;



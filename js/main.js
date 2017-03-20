var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext('2d');
var nov = document.getElementById('nov');


var width = 700, height = 400;
var novvy = {
	x: 0,
	y: 0,
}

function update(){
	novvy.x += 1

}
function render(){
	context.clearRect(0, 0, width, height);
	context.drawImage(nov, novvy.x, 9);
}

function game(){
	update();
	render();
}

setInterval(function(){
	game();
}, 1000/30);
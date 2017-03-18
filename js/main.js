var d = document;
var can = d.getElementById("gameCanvas");
var ctx = can.getContext('2d');
var nov = new Image('imgs/nov.jpg');
nov.onLoad = function(){
        nov.ready = true;
}
function render() {
        ctx.drawImage(nov, 0, 0);
        window.requestAnimationFrame(render);
}

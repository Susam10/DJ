var m="";
var s="";

function preload() {
    m= loadSound("01 Running About.mp3");
    s= loadSound("JAyvw4i5uCP_Sonic-The-Hedgehog-OST---Green-Hill-Zone.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    v = createCapture(VIDEO);
    v.hide();
}
function draw() {
    image(v, 0, 0, 600, 500)
}
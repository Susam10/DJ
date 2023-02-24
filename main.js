var m="";
var s="";
xr=0;
yr=0;
xl=0;
yl=0;

function preload() {
    m= loadSound("01 Running About.mp3");
    s= loadSound("JAyvw4i5uCP_Sonic-The-Hedgehog-OST---Green-Hill-Zone.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    v = createCapture(VIDEO);
    v.hide();

    pn = ml5.poseNet(video, ml);
    pn.on('pose', gotp);
}
function ml() {
    console.log("hi")
}
function draw() {
    image(v, 0, 0, 600, 500)
}

function gotp(r) {
    if(r.length>0)
    {
        console.log(j);
        xl=r[0].pose.leftWrist.x;
        yl=r[0].pose.leftWrist.y;
        console.log("L  " + xl + ", " + yl);
        xr=r[0].pose.rightWrist.x;
        yr=r[0].pose.rightWrist.y;
        console.log("R  " + xr + ", " + yr);
    }
}
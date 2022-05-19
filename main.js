mushtashX = 0;
mushtashY = 0;

function preload() {
    img = loadImage("https://i.postimg.cc/6qDxQBrF/m.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        mushtashX = results[0].pose.mushtash.x;
        mushtashY = results[0].pose.mushtash.y;
        console.log("mushtash  x=" + mushtashX);
        console.log("mushtash y=" + mushtashY);

    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}


function draw() {
    image(video, 0, 0, 300, 300);
    image(img, mushtashX - 30, mushtashY - 30, 20, 20);
}

function take_snapshot() {
    save('atharvGOOD.png');
}
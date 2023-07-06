diference = 0;
rightWristX = 0;
leftWristX = 0;
noseX = 0;
noseY = 0;
texto = "Creeper"
function setup(){
    canvas = createCanvas(600,400)
    video = createCapture(VIDEO);
    video.size(600,400);
    canvas.position(700,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotResults)
}
function draw(){
    background(95,158,160);
    textSize(diference);
    fill(0,255,0);
    text(texto,noseX - 50, noseY);
}
function modelLoaded(){
    console.log("LOADED!");
}
function gotResults(results){
    if (results.length > 0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        diference = floor(leftWristX - rightWristX);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        document.getElementById("FontWidth").innerHTML = "Fonte: " + diference;
    }
}
function newText(){
    texto = document.getElementById("text").value;
}
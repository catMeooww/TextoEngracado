function setup(){
    canvas = createCanvas(600,400)
    video = createCapture(VIDEO);
    video.size(600,400);
    canvas.position(700,130);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotResults)
}
function modelLoaded(){
    console.log("LOADED!");
}
function gotResults(results){
    if (results.length > 0){
        console.log(results);
    }
}
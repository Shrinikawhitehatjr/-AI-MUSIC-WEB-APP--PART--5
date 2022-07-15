song = "";

function setup() {

    createCanvas(600, 500);
    canvas.center();
}
poseNet = ml5.poseNet(video, modeloaded);
poseNet.on('pose', gotPoses);
ml5.isPlaying('true', 'false');

function play() {

    song.play();
    song.rate(1);
    song.setVolume(1);
}


function draw(){
    image(video, 0, 0, 600, 500);

    Fill("#770000");
    stroke("#770000");

    circle(rightWristX,rightWristY,20);
    if(scoreRightWrist > 0.2)
    {
    circle(leftWristX,leftWristY,20);

    if(rightWristY >0 && rightWristY <= 100)
    {
        document.getElementById("speed").innerHTML = "speed = 0.5x";
        song.rate(0.5);
    }
    else if(rightWristY > 100 && rightWristY <= 200)
    {
        document.getElementById("speed").innerHTML = "speed = 1x";
        song.rate(1);
    }
    else if(rightWristY > 200 && rightWristY <= 300)
     {
        document.getElementById("speed").innerHTML = "speed = 1.5x";
        song.rate(1.5);
     }
     else if(rightWristY > 300 && rightWristY <= 400)
     {
        document.getElementById("speed").innerHTML = "speed = 2x";
        song.rate(2);
     }
     else if(rightWristY > 400 && rightWristY <=500)
     {
        document.getElementById("speed").innerHTML = "speed = 2x";
        song.rate(2.5);
     }
    }

    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX,leftWristY,20);
        InNumberWristX = Number(leftWristY);
        remove_decimals = floor(leftWristY);
        volume = remove_decimals/500;
        leftWristY_divide_1000 = remove_decimals/1000;
        volume = leftWristY_divide_1000 *2;
        document.getElementById("volume").innerHTML = "volume = "+ volume;
        song.setVolume(volume);
    }

}
function gotPoses(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0);
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("leftWristX = " + leftWristX + "rightWristX = "+ rightWristX)

        rightWristX.results[0].pose.rightWrist.x;
        rightWristY.results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = "+ rightWristY);
    }
}

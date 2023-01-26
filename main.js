left_wrist_x = 0;
right_wrist_x = 0;
text_size = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,550);
    video.position(30,120)

    canvas = createCanvas(800,500);
    canvas.position(560,200);

    PoseNet = ml5.poseNet(video,modelLoaded);

    PoseNet.on('pose',gotPoses);

} 

function modelLoaded()
{
    console.log("The model has Loaded");
}

function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
    }

    left_wrist_x = results[0].pose.leftWrist.x;
    right_wrist_x = results[0].pose.rightWrist.x;

    console.log("The X position of the Left Wrist is = " + left_wrist_x);
    console.log("The X position of the Right Wrist is = " + right_wrist_x);

   text_size = left_wrist_x - right_wrist_x;

   text_size = Math.floor(text_size);

   document.getElementById("font-size").innerHTML = "The text size is : " + text_size;

    
}

function draw()
{
    background('#03ffc4');
    textSize(text_size);
    fill('#0381ff');
    text('😈😈Rishabh😈😈' ,40,90);
}
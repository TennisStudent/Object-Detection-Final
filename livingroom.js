status = "";
img = "";
result = [];

function preload()
{
    img = loadImage("livingroom.jpg");
}
function setup()
{
    canvas = createCanvas(640, 380);
    canvas.center()
    object_detection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded()
{
    console.log("cocossd is initialized");
    status = true;
    object_detection.detect(img, gotResult);
}
function gotResult(error, results)
{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log(results);
    }
}
function draw()
{
    if(status != "")
    {
        object_detection.detect(video, gotResult);

        for(i = 0; i < object.length; i++)
        {
            document.getElementById("status").innerHTML = "Object Detected";
            document.getElementById("number_of_objects").innerHTML = "The number of detected objects: " + object.length;
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 20, object[i].y+ 20);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}
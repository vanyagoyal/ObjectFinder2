status = "";

function setup(){
    canvas = createCanvas(450 , 400);
    webcam = createCapture(VIDEO);
    webcam.hide();
}

function draw(){
    image(webcam , 0 , 0 , 450 , 400);
}

function start(){
    object_Detector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object = document.getElementById("object_input").value;
}

function modelLoaded(){
    console.log("CocoSsd Model Loaded!!");
    status = true;
}
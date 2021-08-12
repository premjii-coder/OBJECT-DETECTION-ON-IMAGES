status="";
img="";
object=[];
function preload(){
    img=loadImage('book.jpeg');
}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();

   objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML="status = detecting objects";
}
function modelLoaded(){
    console.log("model is loading!!!");
    status= true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,result){
if(error){
    console.log(error);
}
else{
    console.log(result);
    
}
}

function draw(){
    image(img,0,0,600,400)
    fill('#baeb34')
    text("book",30,30);
    noFill();
    stroke('#42f551');
    rect(20,20,300,300);
}

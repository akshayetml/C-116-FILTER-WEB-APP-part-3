nosex=0;
nosey=0;

function preload(){
  mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
  canvas=createCanvas(450,400);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotpose);
}

function draw(){
  image(video, 0, 0, 500, 400);
  image(mustache,nosex,nosey,150,80)
}

function takesnapshot(){  
  save("realtimefilter.png");

}

function modelLoaded(){
  console.log('poseNet is initialized');
}

function gotpose(results){
  if(results.length > 0){
    console.log(results);
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    console.log("nosex = " +nosex);
    console.log("nosey = " +nosey);
  }
}
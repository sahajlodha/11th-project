var path,Runner,leftBoundary,rightBoundary;
var pathImage,RunnerImage;
var i;

function preload(){
  //pre-load images
RunnerImage = loadAnimation("Runner-1.png","Runner-2.png");
pathImage = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  //for road or path
path = createSprite(200,200);
path.addImage(pathImage);
path.velocityY = 4;
path.scale=1.2;
  
//for Runner
Runner = createSprite(180,340,30,30);
Runner.addAnimation("RunnerRunning",RunnerImage);
Runner.scale=0.08;

// for createing left Boundary
leftBoundary = createSprite(0,0,100,200);
leftBoundary.visible = false;

// for creating right boundary
rightBoundary = createSprite(410,0,100,200);
rightBoundary.visible = false;


//creating invisible road
invisiblePath = createSprite(190,200,20,50);
invisiblePath.visible=false;
}

function draw() {
  background(0);

  // boy moving with mouse
  Runner.x = World.mouseX;

  edges = createEdgesSprite();
  Runner.collide(edges[3]);
  Runner.collide(leftBoundary);
  Runner.collide(rightBoundary);


if(path.y > 400){
path.y=height/2;
}

drawSprites();
}

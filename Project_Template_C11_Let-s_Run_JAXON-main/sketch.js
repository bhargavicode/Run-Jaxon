var track,trackImage,boyImage,boy,leftBoundarie,rightBoundarie;
function preload(){
  //pre-load images
  trackImage=loadImage("path.png")
  boyImage=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  track=createSprite(200,200)
  track.addImage(trackImage)
  track.velocityY=4
  track.scale=1.2

  boy=createSprite(180,340,30,30)
  boy.addAnimation("Running",boyImage)
  boy.scale=0.08
  
  leftBoundarie=createSprite(0,0,100,800)
  leftBoundarie.visible=false

  rightBoundarie=createSprite(410,0,100,800)
  rightBoundarie.visible=false
}

function draw() {
  background(0);
track.velocityY=4

boy.x=World.mouseX
edges=createEdgeSprites()
  boy.collide(edges[3])
  boy.collide(leftBoundarie);
  boy.collide(rightBoundarie)


if(track.y>400){
  track.y=height/2
}
drawSprites()
}

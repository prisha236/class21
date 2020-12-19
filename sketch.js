var fixedrectangle, movingrectangle;
var r1, r2;
function setup() {
  createCanvas(800,400);
 fixedrectangle= createSprite(400, 200, 50, 50);
 movingrectangle=createSprite(100,100,50,50);
 fixedrectangle.shapeColor="red";
 movingrectangle.shapeColor="red";
 r1=createSprite(200,100,10,20);
 r2=createSprite(200,300,10,20);
 r1.shapeColor="pink";
 r2.shapeColor="purple";
 r1.velocityY=2
 r2.velocityY=-2

}

function draw() {
  background(255,255,255);
  movingrectangle.x=mouseX;
  movingrectangle.y=mouseY;
  

  if(isTouching(movingrectangle,fixedrectangle)){
    movingrectangle.shapeColor="blue";
    fixedrectangle.shapeColor="blue";
  }
  else{
    movingrectangle.shapeColor="red";
    fixedrectangle.shapeColor="red";
  }
bounceOff(r1,r2)
  drawSprites();
}



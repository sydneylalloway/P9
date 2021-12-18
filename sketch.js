var ball;
function setup() {
  createCanvas(400,400);
  ball=createSprite(200, 100, 20, 20);
}

function draw() 
{
  background(30);
if (keyDown(RIGHT_ARROW)){
 ball.x=ball.x+5;
}
if (keyDown(LEFT_ARROW)){
  ball.x=ball.x-5;
 }
 if (keyDown(DOWN_ARROW)){
  ball.y=ball.y+5;
 }
 if (keyDown(UP_ARROW)){
  ball.y=ball.y-5;
 }
  


drawSprites();
}





var box 
function setup() {
  createCanvas(1500,1000);
  box = createSprite (750,500,50,50)
}

function draw() 
{
  background(30);
  drawSprites()
  if (keyDown("up")){
    box.y -=3
  }
  if (keyDown("down")){
    box.y +=3
  }
  if (keyDown("left")){
    box.x -=3
  }
  if (keyDown("right")){
    box.x +=3
  }
}





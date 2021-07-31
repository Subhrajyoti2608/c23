var astronaut
var spaceShip

function preload(){
bg = loadImage("iss.png")
sleep = loadImage("sleep.png")
brush = loadImage("brush.png")
gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
eat = loadAnimation("eat1.png","eat2.png")
drink = loadAnimation("drink1.png","drink2.png")
eat = loadAnimation("eat1.png","eat2.png")
move = loadAnimation("move.png","move1.png")
}


function setup() {
  createCanvas(400, 400);
  
  spaceShip = createSprite(400,400)
  spaceShip.addImage(bg)

 astronaut = createSprite(300,230)
 astronaut.addAnimation("sleeping",sleep)
 astronaut.scale=0.1

}

function draw() {
  background(0);

  edges = createEdgesSprites()
  astronaut.collide(edges)

 if(keyDown(UP_ARROW)){
 astronaut.addAnimation("brushing",brush)
 astronaut.changeAnimation("brushing")
 astronaut.y = 350
 astronaut.velocityX = 0
 astronaut.velocityY = 0
 }

 if(keyDown(DOWN_ARROW)){
  astronaut.addAnimation("gymming",gym)
  astronaut.changeAnimation("gymming")
  astronaut.y = 350
  astronaut.velocityX = 0
  astronaut.velocityY = 0
 }

 if(keyDown(LEFT_ARROW)){
  astronaut.addAnimation("eating",eat)
  astronaut.changeAnimation("eating")
  astronaut.y = 350
  astronaut.velocityX = 0
  astronaut.velocityY = 0
 }

 if(keyDown(RIGHT_ARROW)){
  astronaut.addAnimation("bathing",bath)
  astronaut.changeAnimation("bathing")
  astronaut.y = 350
  astronaut.velocityX = 0
  astronaut.velocityY = 0
 }

 if(keyDown(m)){
  astronaut.addAnimation("moving",move)
  astronaut.changeAnimation("moving")
  astronaut.y = 350
  astronaut.velocityX = -4
  astronaut.velocityY = 2
 }

}
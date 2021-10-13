var backgroundImg , bg;
var asteroidImg , asteroid , asteroidsGroup;
var rocketImg , rocket;
var gameState= "play"

function preload(){

backgroundImg = loadImage("background.jpg");
asteroidImg = loadImage("asteroid.png");
rocketImg = loadImage("rocket.jpg");

}

function setup(){
    var canvas = createCanvas(400,800);
    bg = createSprite(300,300);
  bg.addImage("background",backgroundImg);
  bg.velocityY = 1;
  rocket =createSprite(200,200,50,50)
  rocket.addImage(rocketImg);
  rocket.scale=0.4
  asteroidsGroup=new Group();
  
}

function draw(){
    background(0);
    if(gameState==="play"){}

  asteroid();
  if(background.y > 400){
    background.y = 300

   }
   if(keyDown("space")){
     rocket.velocityY=-5
   }
   rocket.velocityY=rocket.velocityY+0.8
   if(keyDown("left_arrow")){
    rocket.x=rocket.x-3
  }
  if(keyDown("right_arrow")){
    rocket.x=rocket.x+3
  }
  if(rocket.y>600){
  rocket.destroy()
  gameState="end"
}

drawSprites()
if (gameState === "end"){ stroke("yellow");
fill("yellow");
textSize(30);
text("Game Over", 230,250) }

function asteroid(){
  if(frameCount % 250 === 0){
    asteroid=createSprite(200,-50)
    asteroid.addImage(steroidImg)
    asteroid.velocityY=1
    asteroid.x= Math.round(random(120,400))
    asteroid.lifetime = 800;
    asteroidsGroup.add(asteroid);
    rocket.depth=asteroid.depth
    rocket.depth+=1
}
}
}

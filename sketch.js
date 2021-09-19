var backImage,backgr;
var player, player_running;
var ground,ground_img;
var banana, bananaImage
var obstacle, obstacleImage

var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage=loadImage("Black.jpg");
  player_running = loadAnimation("download.png");
bananaImage = loadImage("banana.png")
obstacleImage = loadImage("stone.png")
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.6;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
 bananaGroup = new Group()
  obstacleGroup = new Group()
}

function draw() { 
  background(0);

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

  }
spawnFood()
spawnobstacle()
  drawSprites();
}
function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
   banana.depth = player.depth;
   player.depth = player.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
    
  }
  
}

function spawnobstacle() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var obstacle  = createSprite(600,370,40,10);

    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.5;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    //adjust the depth
   obstacle.depth = player.depth;
    player.depth = player.depth + 1;
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
    
  }
  
}

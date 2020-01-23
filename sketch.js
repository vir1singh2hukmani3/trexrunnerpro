var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudImage;
var o1, o2, o3, o4, o5, o6;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudImage = loadImage ("cloud.png");
  groundImage = loadImage("ground2.png");
o1 = loadImage("obstacle1.png");
o2 = loadImage("obstacle2.png");
o3 = loadImage("obstacle3.png");
o4 = loadImage("obstacle4.png");
o5= loadImage("obstacle5.png");
o6= loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(0);
  
  spawnObstacles();
  spawnClouds();
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  drawSprites();
}
function spawnClouds() {
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.lifetime = 200;
  }
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1:obstacle.addImage(o1);
      break;
      case 2:obstacle.addImage(o2);
      break;
      case 3:obstacle.addImage(o3);
      break;
      case 4:obstacle.addImage(o4);
      break;
      case 5:obstacle.addImage(o5);
      break;
      case 6:obstacle.addImage(o6);
      break;
      default:
     break;
    }  
    
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
  }
}
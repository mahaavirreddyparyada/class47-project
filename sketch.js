var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,zombieImg;
var bigZombie,bigZombieImg;
var bullet, bulletImg;
var bulletGrp;
var score = 0;
var count = 0;
function preload(){
  
  shooterImg = loadImage("officer.png")
  zombieImg = loadAnimation("zombie1.gif")
  bigZombieImg = loadImage("BigZombie1.gif")
  bgImg = loadImage("zombie city.jpg")
  bulletImg = loadImage("bullet.png")


}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 2
bulletGrp = new Group();

player = createSprite(displayWidth-1150, displayHeight-250, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.1
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   zombie = createSprite(displayWidth-500, displayHeight-250,20,20);
   zombie.addAnimation("zombie",zombieImg);
   zombie.scale = 0.1

   bigZombie = createSprite(displayWidth-750, displayHeight-250,20,20);
   bigZombie.addImage("bigZombie",bigZombieImg);
   bigZombie.scale = 1.0
   
}

function draw() {
  background(0); 

  

createBullet();
if(keyDown("space")){
 bullet.velocityX=3;

}
if(bulletGrp.isTouching(zombie)){
  zombie.destroy();
  bulletGrp.destroyEach();
  score = score + 10

}
if(bulletGrp.isTouching(bigZombie)){
  bulletGrp.destroyEach();
  count = count+1 
  if(count===2){
  bigZombie.destroy();
  score = score + 20
}
}



drawSprites();
textSize(30);
fill ("blue");
text ("score : "+score,displayWidth-300,40)


if (score == 30){
fill ("red");
text ("congratulations",displayWidth/2,displayHeight/2);
}

}

function createBullet(){
  for(var i =1;i<=10;i++){
    bullet = createSprite(displayWidth-1150,displayHeight-290,20,20);
    bullet.addImage("bullet",bulletImg);
    bullet.scale = 0.1
    bulletGrp.add(bullet);
 }
}

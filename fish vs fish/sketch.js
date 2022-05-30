var play=1;
var end=0;
var gameState=play;
var trex;
var fish1,fish2,fish3,fish4,fish5;
var fish1_img,hero_fish_img,villan_fish2_img;
var hero_fish,villan_fish;
var fish_food,seaImg;
var sea;
var seaGrassGroup,seaGrass1,seaGrass2,seaGrass3,seaGrass4;
var seaGrassImg1,seaGrassImg2,fishes,fishGroup;
var scoreboard=0;
var a;

function preload(){
 fish1_img = loadImage("fish_1.png");
 fish2 = loadImage("fish_2.png");
 fish3 = loadImage("fish_3.png");
 fish4 = loadImage("fish_4.png");
 fish5 = loadImage("fish_5.png");
// fish_food = loadImage("fish_food.png");
 hero_fish_img = loadImage("hero_fish.png");
 villan_fish_img = loadImage("villan_fish.png");
 seaImg = loadImage("sea image.jpg");
}
function setup() {
  createCanvas(1200,600);
  
  
  sea = createSprite(900,500,900,800)
  sea.addImage('seaImage',seaImg)
  sea.velocityX=-2;
  sea.x=sea.width/2;
  
  //   fish1.addImage('fishImg',fish1_img)
  

   hero_fish =createSprite(800,350,30,30)
   hero_fish.addImage('fishImg',hero_fish_img)
   hero_fish.scale=0.2

  villan_fish=createSprite(1000,350,30,30)
  villan_fish.addImage('villanFish',villan_fish_img)
  villan_fish.scale=0.3
  // villan_fish.velocityX=hero_fish.x
  // villan_fish.y=hero_fish.y

  fishGroup=createGroup();
  seaGrassGroup=createGroup();
  


 }

function draw() {
  textSize(15)
  fill("red")
  a=text("SCORE  "+scoreboard,1000,1000)
    sea.depth = a.depth;
    a.depth = a.depth + 1;
    
  
 // background("yellow");
   if(sea.x<0){
     sea.x=sea.width/2
   }
  if(keyDown("UP_ARROW")){
    hero_fish.y=hero_fish.y-2
  }
 
  if(keyDown("DOWN_ARROW")){
    hero_fish.y=hero_fish.y+2
  }
  // seaGrass();
  randomFish();

  if(fishGroup.isTouching(hero_fish)){
    fishGroup.setVelocityXEach(0)
  }

 
  drawSprites();
}
function seaGrass(){
  if(frameCount%60===0){
seaGrass1=createSprite(200,400,20,20)
seaGrass1.y=Math.round(random(200,400))
seaGrass1.velocityX=4
}

}

function randomFish() {
  if(frameCount %300 === 0) {
   fishes = createSprite(200,400,20,20);
   fishes.y=Math.round(random(200,400))
   fishes.addImage('fish1',fish1_img)
    
    //assign scale and lifetime to the obstacle           
    fishes.scale = 0.3;
    fishes.lifetime = 300;
    fishes.velocityX=4
    //add each obstacle to the group
    fishGroup.add(fishes);
  }
}


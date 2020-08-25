var tilesGroup1, tilesGroup2, tilesGroup3;

var leg;

var shoes;

var bg;

var music, ding, plop;

var gameState = "start";

var restart, restartImg;

var score = 0;

function preload() {
  shoes = loadImage ("shoes.png");
  bg = loadImage ("bg.jpg");
  music = loadSound ("music.mp3");
  ding = loadSound ("ding.mp3");
  plop = loadSound ("Plop.mp3");
  restartImg = loadImage ("restart.png");
}


function setup() {
  createCanvas(displayWidth-40,displayHeight-50);
  tilesGroup1 = new Group ();
  tilesGroup2 = new Group ();
  tilesGroup3 = new Group ();
  textSize (30);
  textFont ("Times New Roman");
  fill ("white");
  leg = createSprite (400, 400, 40, 70);
  leg.addImage (shoes);
  restart = createSprite (80, 80, 100, 100);
  restart.visible = false;
  restart.addImage (restartImg);
  restart.scale = 0.5;
}

function draw() {
  background(bg); 
  text ("Score : " + score, displayWidth-250, 100);
  if (gameState == "start"){
    leg.x = mouseX;
    leg.y = mouseY;
    spawnTiles(); 
    spawnMoreTiles();
    spawnMore2Tiles();

  //music.play();

  if (leg.isTouching (tilesGroup1)){
    tilesGroup1.destroyEach();
    score += 2;
    ding.play();
  }

  if (leg.isTouching (tilesGroup2)){
    tilesGroup2.destroyEach();
    score += 3;
    ding.play();
  }

  if (leg.isTouching (tilesGroup3)){
    tilesGroup3.destroyEach();
    score += 1;
    ding.play();
  }

  edges = createEdgeSprites();

  if (tilesGroup1.collide(edges[3])){
    score-=4;
    tilesGroup1.destroyEach();
    plop.play();
  }

  if (tilesGroup2.collide(edges[3])){
    score-=1;
    tilesGroup2.destroyEach();
    plop.play();
  }

  if (tilesGroup3.collide(edges[3])){
    score-=2;
    tilesGroup3.destroyEach();
    plop.play();
  }

  if (score>10){
    gameState = "end";
    restart.visible = true;
  }

} else if (gameState == "end"){
  tilesGroup1.destroyEach();
  tilesGroup2.destroyEach();
  tilesGroup3.destroyEach();
  textSize (100);
  fill ("white");
  text ("GAME OVER", displayWidth/2 - 300, displayHeight/2);
}

if (mousePressedOver (restart)){
  gameState = "start";
  score = 0;
  restart.visible = false;
}

  drawSprites();
}

function spawnTiles(){
  if (frameCount%100==0){
    var tile = createSprite (random (50,displayWidth-100), 0, 50, 80);
    tile.shapeColor = color (random (0, 255), random (0,255), random (0,255));
    tile.velocityY = 10;
    tile.lifetime = 100;
    tilesGroup1.add (tile);
  }
}

function spawnMoreTiles(){
  if (frameCount%120==0){
    var tile = createSprite (random (50,displayWidth-100), 0, 50, 80);
    tile.shapeColor = color (random (0, 255), random (0,255), random (0,255));
    tile.velocityY = 14;
    tile.lifetime = 100;
    tilesGroup2.add (tile);
  }
}

function spawnMore2Tiles(){
  if (frameCount%130==0){
    var tile = createSprite (random (50,displayWidth-100), 0, 50, 80);
    tile.shapeColor = color (random (0, 255), random (0,255), random (0,255));
    tile.velocityY = 8;
    tile.lifetime = 100;
    tilesGroup3.add (tile);
  }
}
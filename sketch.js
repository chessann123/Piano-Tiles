var tilesGroup1, tilesGroup2, tilesGroup3;

var score = 0;


function setup() {
  createCanvas(800,800);
  tilesGroup1 = new Group ();
  tilesGroup2 = new Group ();
  tilesGroup3 = new Group ();
  textSize (30);
  textFont ("Times New Roman");
  fill ("black");
}

function draw() {
  background(255,255,255); 
  text ("Score : " + score, 650, 100);
  spawnTiles(); 
  spawnMoreTiles();
  spawnMore2Tiles();

  /*
  if (mousePressedOver (tilesGroup1)){
    tilesGroup1.destroyEach();
    score += 2;
  }

  if (mousePressedOver (tilesGroup2)){
    tilesGroup2.destroyEach();
    score += 3;
  }

  if (mousePressedOver (tilesGroup3)){
    tilesGroup3.destroyEach();
    score += 1;
  }
  */

  drawSprites();
}

function spawnTiles(){
  if (frameCount%100==0){
    var tile = createSprite (random (50,750), 0, 50, 80);
    tile.shapeColor = color (random (0, 255), random (0,255), random (0,255));
    tile.velocityY = 10;
    tile.lifetime = 100;
    tilesGroup1.add (tile);
  }
}

function spawnMoreTiles(){
  if (frameCount%120==0){
    var tile = createSprite (random (50,750), 0, 50, 80);
    tile.shapeColor = color (random (0, 255), random (0,255), random (0,255));
    tile.velocityY = 14;
    tile.lifetime = 100;
    tilesGroup2.add (tile);
  }
}

function spawnMore2Tiles(){
  if (frameCount%130==0){
    var tile = createSprite (random (50,750), 0, 50, 80);
    tile.shapeColor = color (random (0, 255), random (0,255), random (0,255));
    tile.velocityY = 8;
    tile.lifetime = 100;
    tilesGroup3.add (tile);
  }
}
var tilesGroup1, tilesGroup2, tilesGroup3;

var leg;

var shoes;

var bg;

var score = 0;

function preload() {
  shoes = loadImage ("shoes.png");
  bg = loadImage ("bg.jpg");
}


function setup() {
  createCanvas(800,800);
  tilesGroup1 = new Group ();
  tilesGroup2 = new Group ();
  tilesGroup3 = new Group ();
  textSize (30);
  textFont ("Times New Roman");
  fill ("white");
  leg = createSprite (400, 400, 40, 70);
  leg.addImage (shoes);
}

function draw() {
  background(bg); 
  text ("Score : " + score, 650, 100);
  leg.x = mouseX;
  leg.y = mouseY;
  spawnTiles(); 
  spawnMoreTiles();
  spawnMore2Tiles();

  
  if (leg.isTouching (tilesGroup1)){
    tilesGroup1.destroyEach();
    score += 2;
  }

  if (leg.isTouching (tilesGroup2)){
    tilesGroup2.destroyEach();
    score += 3;
  }

  if (leg.isTouching (tilesGroup3)){
    tilesGroup3.destroyEach();
    score += 1;
  }

  edges = createEdgeSprites();

  if (tilesGroup1.collide(edges[3])){
    score-=4;
    tilesGroup1.destroyEach();
  }

  if (tilesGroup2.collide(edges[3])){
    score-=1;
    tilesGroup2.destroyEach();
  }

  if (tilesGroup3.collide(edges[3])){
    score-=2;
    tilesGroup3.destroyEach();
  }

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
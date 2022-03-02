var player, playerImg;
var enemy, enemyImg;
var coin, coinImg;
var mainArea;
var obstacle, obstacleImg;

function preload(){
  playerImg = loadImage("assets/Player.png");
  enemyImg = loadImage("assets/Enemy.png");
  coinImg = loadImage("assets/Points.png");
}

function setup(){
      createCanvas(1800,857);
      
      player = createSprite(200,200,20,20);
      player.addImage("player",playerImg);
      player.scale = 0.3;
}

function draw(){
  background("blue");

  drawSprites();
}
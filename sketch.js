var player, playerImg;
var enemy, enemyImg;
var coin, coinImg;
var mainArea, mapImg, map;
var obstacle, obstacleImg;

var X = 900;

/*const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;*/

function preload(){
  playerImg = loadImage("assets/Player.png");
  enemyImg = loadImage("assets/Enemy.png");
  coinImg = loadImage("assets/Points.png");
  mapImg = loadImage("assets/Map.png")
}

function setup(){
  //canvas
      createCanvas(1800,857);
        

          //Engine Start
          //engine = Engine.create();
          //world = engine.World;

         //map
        map = createSprite(900,428.5,500,500);
        map.addImage("map", mapImg);
        map.scale = 2.5;

              //Player
      player = createSprite(900,458.5,20,20);
      player.addImage("player",playerImg);
      player.scale = 0.1;
      player.debug = false;
      player.setCollider("Circle",0,0,45);
      

        
}

function draw(){
  background("white");
  createEdgeSprites();

  

  console.log(player.x);

  move();

  drawSprites();
}

function move(){
  if(keyDown("UP_ARROW")){

      player.y -= 10;

  }
      if(keyDown("DOWN_ARROW")){

        player.y += 10;

    }
        if(keyDown("RIGHT_ARROW")){

          player.x += 10;

        }
            if(keyDown("LEFT_ARROW")){

            player.x -= 10;

            }
            }
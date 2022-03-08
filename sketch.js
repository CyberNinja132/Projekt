var player, playerImg;
var enemy, enemyImg;
var coin,coin1,coin2,coin3, coinImg;
var mainArea, mapImg, map;
var obstacle, obstacleImg;

var Escape;

var scoreBoard = 0;

var gameState = 0;

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
         /*
        map = createSprite(900,428.5,500,500);
        map.addImage("map", mapImg);
        map.scale = 100;*/

              //Player
      player = createSprite(900,458.5,20,20);
      player.addImage("player",playerImg);
      player.scale = 0.15;
      player.debug = false;
      player.setCollider("Circle",0,0,45);

      //Enemy
      enemy = createSprite(900,458.5,20,20);
      enemy.addImage("enemy",enemyImg);
      enemy.scale = 0.15;

      //coins
      /*coin = createSprite(200,200,20,20);
      coin.addImage("coin",coinImg);
      coin.scale = 0.09;*/

      coinGroup = new Group();

      for( var i = 0 ; i < 20 ; i++){

        coin = createSprite(random(1800,0),random(857.5,8),20,20);
        coin.addImage("coin",coinImg);
        coin.scale = 0.09;
        coinGroup.add(coin);

      }

      /*
      coin1 = createSprite(300,200,20,20);
      coin1.addImage("coin",coinImg);
      coin1.scale = 0.09;

      coin2 = createSprite(400,200,20,20);
      coin2.addImage("coin",coinImg);
      coin2.scale = 0.09;

      coin3 = createSprite(500,200,20,20);
      coin3.addImage("coin",coinImg);
      coin3.scale = 0.09;
      */

      
      

        
}

function draw(){
  background(mapImg);
  createEdgeSprites();
  //console.log(player.y);
  textSize(50);
  fill("red");
  text("SCORE:"+scoreBoard,25,60);


  //collider
  enemy.collide(player);
  enemy.setCollider("circle",0,0,180);
  enemy.debug = true;

  /*coin.collide(player);
  coin.setCollider("circle",0,0,195);
  coin.debug = true;*/
/*
  coin1.collide(player);
  coin1.setCollider("circle",0,0,195);
  coin1.debug = true;
  
  coin2.collide(player);
  coin2.setCollider("circle",0,0,195);
  coin2.debug = true;

  coin3.collide(player);
  coin3.setCollider("circle",0,0,195);
  coin3.debug = true;
  */

  //enemy.velocityX = 1;

  if(scoreBoard === 1000){
       Escape = createSprite(200,200,50,50);
  }

  //FUNCTIONS
  playerMove();
  enemyAI();
  Edges();
  scoreboard();

  drawSprites();
}

function playerMove(){
  if(gameState === 0 || gameState === 1){
        if(keyDown("UP_ARROW" )){

            player.y -= 10;
            gameState = 1;

        }
        if(keyWentUp("UP_ARROW")){
          gameState = 0;
        }
              if(keyDown("DOWN_ARROW")){
                player.y += 10;
                gameState = 1;
            }
                if(keyWentUp("DOWN_ARROW")){
                  gameState = 0;
                }

                    if(keyDown("RIGHT_ARROW")){

                      player.x += 10;
                      gameState = 1;

                    }
                          if(keyWentUp("RIGHT_ARROW")){
                            gameState = 0;
                          }
                              if(keyDown("LEFT_ARROW")){

                              player.x -= 10;
                              gameState = 1;

                          }
                                if(keyWentUp("LEFT_ARROW")){
                                  gameState = 0;
                                }
            }
          }

function enemyAI(){
  if(keyDown(LEFT_ARROW) && gameState === 1){
    //enemy.x = player.x - 100;
    enemy.x -= 6;
  }
  if(keyDown(RIGHT_ARROW )&& gameState === 1){
    //enemy.x = player.x - 100;
    enemy.x += 6;
  }
  if(keyDown(UP_ARROW)&& gameState === 1){
    //enemy.x = player.x - 100;
    enemy.y -= 6;
  }
  if(keyDown(DOWN_ARROW)&& gameState === 1){
    //enemy.x = player.x - 100;
    enemy.y += 6;
  }

}

function Edges(){
      //player Edge
      if(player.x < 0){
        player.x += 25;
      }
      if(player.x >1800){
        player.x -= 25;
      }
      if(player.y < 8){
          player.y += 25
      }
      if(player.y > 857){
        player.y -= 25
      }


      //enemy Edge
      if(enemy.x < 0){
        enemy.x += 25;
      }
      if(enemy.x >1800){
        enemy.x -= 25;
      }
      if(enemy.y < 8){
          enemy.y += 25
      }
      if(enemy.y > 857){
        enemy.y -= 25
      }
}

function scoreboard(){
  if(player.isTouching(coinGroup)){
    scoreBoard = 1000;
    coinGroup.destroyEach();
  }
}




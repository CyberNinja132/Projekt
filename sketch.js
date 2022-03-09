var player, playerImg;
var enemy, enemyImg;
var coin,coin1,coin2,coin3, coinImg;
var mainArea, mapImg, map;
var obstacle, obstacleImg;

var music, hurt, clink;

var Escape;

var scoreBoard = 0;

var gameState = 0;

var X = 900;

var arr;

/*const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;*/

function preload(){
  playerImg = loadImage("assets/Player.png");
  enemyImg = loadImage("assets/Enemy.png");
  coinImg = loadImage("assets/Points.png");
  mapImg = loadImage("assets/Map.png");

  music = loadSound("assets/sounds/001 - Stardew Valley Overture.mp3");
  hurt = loadSound("assets/sounds/hurt.mp3");
  clink = loadSound("assets/sounds/Coin.mp3");
}

function setup(){
  //canvas
      createCanvas(1800,857);

          music.play();
        

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
    
      /*coin = createSprite(200,200,20,20);
      coin.addImage("coin",coinImg);
      coin.scale = 0.09;*/

      //groups
      coinGroup = new Group();
      enemyGroup = new Group();

       //coins
      /*for(var i = 0; i<5;i++){
        coin = createSprite(random(1800,0),random(857.5,8),20,20);
        //console.log(coin)
        coin.addImage("coin",coinImg);
        coin.scale = 0.09;
      }*/
        
        
        


      //Enemy
      for( var i =0; i <10 ; i++){
        enemy = createSprite(random(1800,0),random(857.5,8),20,20);
        enemy.addImage("enemy",enemyImg);
        enemy.scale = 0.15;
        enemyAI();
        enemyGroup.add(enemy);
        console.log(enemyGroup)
        
      }

    

      
      coin1 = createSprite(random(1800,0),random(857.5,8),20,20);
      coin1.addImage("coin",coinImg);
      coin1.scale = 0.09;

      coin2 = createSprite(random(1800,0),random(857.5,8),20,20);
      coin2.addImage("coin",coinImg);
      coin2.scale = 0.09;

      coin3 = createSprite(random(1800,0),random(857.5,8),20,20);
      coin3.addImage("coin",coinImg);
      coin3.scale = 0.09;
    
      arr = [coin1,coin2,coin3];

      
      

        
}

function draw(){
  background(mapImg);
  createEdgeSprites();
  //console.log(player.y);
  textSize(50);
  fill("red");
  textFont('Impact');
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

  if(player.isTouching(enemy)){
    hurt.play();
  }

  if(scoreBoard === 300){
       Escape = createSprite(200,200,50,50);
       if(Escape.isTouching(player)){
         Escape.shapeColor = "red";
       }
       
  }

  /*if(player.isTouching(arr)){
    arr.pop();
  }*/

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
 for(var i=0; i<arr.length; i++){
    if(player.isTouching(arr[i])){
      scoreBoard += 100;
      arr[i].remove();
      clink.play();
    }
  }
  
}




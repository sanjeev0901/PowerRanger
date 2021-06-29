class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player=new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    rocket1 = createSprite(100,200);
    rocket1.addImage(rocket2Image);
    rocket1.scale=0.5;
    rocket2 = createSprite(300,200);
    rocket2.addImage(rocket1Image);
    rocket2.scale=0.5;
    rockets=[rocket1,rocket2];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    Bullet.getBulletInfo();
    
    if(allPlayers !== undefined){
      background(bg2);
     
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x ;
      var y=70;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        x = 600 - allPlayers[plr].xPosition;
        rockets[index-1].y = y;
        rockets[index-1].x = x;
        y = y + 500;
      }
        
    }

    if(allBullets!==undefined){
      var index=0;
      //var x;
      //var y;

      for(var bull in allBullets){
        index=index+1;



      }
    }

    if(keyDown(RIGHT_ARROW) && player.index !== null){
      player.xPosition -=10
      player.update();
    }

    if(keyDown(LEFT_ARROW) && player.index !== null){
      player.xPosition +=10
      player.update();
    }

    if(keyDown("space")&&player.index!==null){
      if(index===player.index){
      var missile=createSprite(400,400,20,40);
      missile.x=rocket2.x;
      missile.y=rocket2.y;
      missile.velocityY=-5;
      }else{
        var missile1=createSprite(400,400,20,40);
        missile1.x=rocket1.x;
        missile1.y=rocket1.y;
        missile1.velocityY=5;
      }
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}

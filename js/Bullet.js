class Bullet {
    constructor(){
      this.index = null;
      this.yPosition = 0;
      this.name = null;
    }
  
    /*getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }*/
  
    update(){
      var bulletIndex = "bullets/bullet" + this.index;
      database.ref(bulletIndex).set({
        name:this.name,
        yPosition:this.yPosition
      });
    }
  
    static getBulletInfo(){
      var bulletInfoRef = database.ref('bullets');
      bulletInfoRef.on("value",(data)=>{
        allBullets = data.val();
      })
    }
  }
  
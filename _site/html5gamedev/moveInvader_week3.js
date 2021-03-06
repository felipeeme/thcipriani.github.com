$(document).ready(function(){

//################## Global Variables ###############################|
var watchKeys = [37, 38, 39, 40]; //Left, right only
var left, up, down, right;

var ctx = $("canvas")[0].getContext("2d");

//################## Invader Prototype/Object #######################|
function Starship(x, y, w, h){
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.init();
}

Starship.prototype = {
  imgLoaded : false,

  init : function(){
    this.img = new Image();

    var self = this;

    this.img.onload = function(){
      self.imgLoaded = true; 
      self.draw();
    };

    this.img.src = 'images/Invader.png';
  },

  move : function(dx, dy){
    ctx.clearRect(this.x, this.y, this.width, this.height);
    this.x += dx;
    this.y += dy;
    this.draw();
  },

  draw : function(){
    if (this.imgLoaded) {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }

};

// ################# Background Object ##############################|
function Outerspace(ctxWidth, ctxHeight){
  this.width = ctxWidth;
  this.height = ctxHeight;

  var starNum = Math.floor(Math.random() * 50) + 50; //Between 50 and 100 Stars
  var starWxH = 2;

  var starPos = [];

  for (var i = 0; i < starNum; i++){
    var posX = Math.floor(Math.random() * ctxWidth) - starWxH;
    var posY = Math.floor(Math.random() * ctxHeight) - starWxH;
    starPos.push(posX, posY, starWxH, starWxH);
  }

  this.starPos = starPos;
  this.draw();
}

Outerspace.prototype = {
  draw : function(){
    ctx.fillStyle = "white";

    for (i = 0; i < this.starPos.length; i = i + 4){
      ctx.fillRect(this.starPos[i], this.starPos[i + 1], this.starPos[i + 2], this.starPos[i + 3]);
    }
  },

  scrollY: function(y){
    ctx.fillStyle = "white";

      if (y < 16){
        for (i = 0; i < this.starPos.length; i = i + 4){

        ctx.clearRect(this.starPos[i], this.starPos[i + 1], this.starPos[i + 2], this.starPos[i + 3]);

        this.starPos[i + 1] += 5;

        if (this.starPos[i + 1] > this.height){
          this.starPos[i + 1] = 0;
        }

        ctx.fillRect(this.starPos[i], this.starPos[i + 1], this.starPos[i + 2], this.starPos[i + 3]);
      }

      }

      if (y > this.height - 51){
        for (i = 0; i < this.starPos.length; i = i + 4){

        ctx.clearRect(this.starPos[i], this.starPos[i + 1], this.starPos[i + 2], this.starPos[i + 3]);

        this.starPos[i + 1] -= 5;

        if (this.starPos[i + 1] < 0){
          this.starPos[i + 1] = this.height;
        }

        ctx.fillRect(this.starPos[i], this.starPos[i + 1], this.starPos[i + 2], this.starPos[i + 3]);
      }

      }
    },

  scrollX: function(x){
    ctx.fillStyle = "white";

      if (x < 16){
        for (i = 0; i < this.starPos.length; i = i + 4){

        ctx.clearRect(this.starPos[i], this.starPos[i + 1], this.starPos[i + 2], this.starPos[i + 3]);

        this.starPos[i] += 5;

        if (this.starPos[i] > this.height){
          this.starPos[i] = 0;
        }

        ctx.fillRect(this.starPos[i], this.starPos[i + 1], this.starPos[i + 2], this.starPos[i + 3]);
      }

      }

      if (x > this.width - 75){
        for (i = 0; i < this.starPos.length; i = i + 4){

        ctx.clearRect(this.starPos[i], this.starPos[i + 1], this.starPos[i + 2], this.starPos[i + 3]);

        this.starPos[i] -= 5;

        if (this.starPos[i] < 0){
          this.starPos[i] = this.height;
        }

        ctx.fillRect(this.starPos[i], this.starPos[i + 1], this.starPos[i + 2], this.starPos[i + 3]);
      }

      }
    }
    
};


//################ Initialize ################################|
var theVoid = new Outerspace(400, 400); //Background

var theMiddle = theVoid.width/2 - 20 //20 is half the ship size

var metaDefender = new Starship(theMiddle, 200, 40, 40); //Player



//############### Game Loop ##################################|
var t = setInterval(function(){
  metaDefender.draw();
  }, 10);



// ################ Keydown sets Timer #####################|
  $(document).keydown(function(e){
 
    var keyIndex = jQuery.inArray(e.keyCode, watchKeys);
  
    if (keyIndex > -1 && keyIndex < 4){

      switch(keyIndex){
    
        case 0: //Left Arrow
          clearInterval(left);
          left = setInterval(function(){
            theVoid.draw();
            (metaDefender.x > 15) ? metaDefender.move(-15, 0) : 0;
            theVoid.scrollX(metaDefender.x);
          }, 10);
          break;

        case 1: //Up Arrow
          clearInterval(up);
          up = setInterval(function(){
            theVoid.draw();
            (metaDefender.y > 15) ? metaDefender.move(0, -15) : 0;
            theVoid.scrollY(metaDefender.y);
          }, 10);
          break;
 
         case 2: //Right Arrow
          clearInterval(right);
          right = setInterval(function(){
            theVoid.draw();
            (metaDefender.x < ((theVoid.width - metaDefender.width) - 15)) ? metaDefender.move(15, 0) : 0;
            theVoid.scrollX(metaDefender.x);
          }, 10);
          break;

       case 3: //Down Arrow
          clearInterval(down);
          down = setInterval(function(){
            theVoid.draw();
            (metaDefender.y < ((theVoid.height - metaDefender.height) - 15)) ? metaDefender.move(0, 15) : 0;
            theVoid.scrollY(metaDefender.y);
          }, 10);
          break;
   
       }

    }  

  });

//########################## Keyup clears timer ###################################|

  $(document).keyup(function(e){
 
    var keyIndex = jQuery.inArray(e.keyCode, watchKeys);
  
    if (keyIndex > -1 && keyIndex < 4){

      switch(keyIndex){
    
        case 0: //Left Arrow
          clearInterval(left);
          break;
    
        case 1: //Up Arrow
          clearInterval(up); 
          break;

        case 2: //Right Arrow
          clearInterval(right); 
          break;
    
        case 3: //Down Arrow
          clearInterval(down); 
          break;
      }

    }  

  });

});

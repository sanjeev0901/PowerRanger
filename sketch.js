var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var allBullets;
var xPosition = 0;
var distance = 0;
var database;

var form, game;
var player;

var rocket1,rocket2,rockets;
var rocket1Image,rocket2Image;

var bg1,bg2;

function preload(){
  bg1 = loadImage("images/bg.png");
  bg2 = loadImage("images/bg2.png");  
  rocket1Image=loadImage("images/rocket1.png");
  rocket2Image=loadImage("images/rocket2.png");

}

function setup(){
  canvas = createCanvas(1500, 650);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(bg1);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

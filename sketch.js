// declaring all the variables
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  // load images to the sprites
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  // assigning the canvas size according to the the device
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  
  // created a variable to connect the game with database
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  // condition to start the game when four players have created
  if(playerCount === 4){
    game.update(1);
  }

// forms get disappeared when four forms are filled
  if(gameState === 1){
    clear();
    game.play();
  }

  // condition to end the game
  if(gameState === 2){
    game.end();
  }
}

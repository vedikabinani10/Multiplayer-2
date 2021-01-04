var database;
var form, game, player;
var GameState=0, PlayerCount=0, distance=0;
var allplayers;
var car1, car2, car3, car4, cars;
var car1img, car2img, car3img, car4img, trackimg;

function preload(){
    car1img = loadImage("images/car1.png");
    car2img = loadImage("images/car2.png");
    car3img = loadImage("images/car3.png");
    car4img = loadImage("images/car4.png");
    trackimg = loadImage("images/track.jpg");
}

function setup(){
    createCanvas(displayWidth, displayHeight);
   // console.log(displayWidth);
   // console.log(displayHeight);
    database = firebase.database();
    game = new Game();
    game.GetState();
    game.Start();
}

function draw(){
    background("white");
    if(PlayerCount==4){
        game.Update(1);
    }
    if(GameState==1){
        game.Play();
    }
    if(GameState==2){
        game.End();
    }
}
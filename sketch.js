var database,game,gameState,player,form,count,allPlayers,car1,car2,car3,car4,distance,car1IMG,car2IMG,car3IMG,car4IMG;
var cars = [];

function preload() {
    car1IMG = loadImage("images/car1.png");
    car2IMG = loadImage("images/car2.png");
    car3IMG = loadImage("images/car3.png");
    car4IMG = loadImage("images/car4.png");
}
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    gameState = 0;
    distance = 0;
    game = new Game();
    game.getGameState();
    game.startGame();
}

function draw(){
    background("white");
    if(count === 4) {
        game.updateGameState(1);

    }
    if(gameState === 1) {
        clear();
        game.play();
    }
    
}


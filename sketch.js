var PLAY = 1
var END = 0
var gameState = PLAY

var rocket,rocketImg
var space
var obstacleGroup, obstacle1, obstacle2
var score
var bg;

var bgImg;
function preload(){
    rocketImg = loadImage("Rocket.png");
    bgImg=loadImage("Background.png");

}

function setup() {
    createCanvas(windowWidth, windowHeight)
   
    bg=createSprite(width/2,height/2,width,height)
    bg.addImage(bgImg);
    bg.scale=1.9

    rocket = createSprite(290, 220, 20, 20)
    rocket.addImage("Rocket", rocketImg)
    rocket.scale=0.4


 
}

function draw() {
 //background(0)
 drawSprites()
}
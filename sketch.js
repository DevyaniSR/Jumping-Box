var canvas;
var music;
var box1,box2,box3,box3,ball
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,550);

    //create 4 different surfaces
    box1 = createSprite(600,500,125,15)
    box1.shapeColor="green"
    box2 = createSprite(450,500,125,15)
    box2.shapeColor="pink"
    box3 = createSprite(300,500,125,15)
    box3.shapeColor="yellow"
    box4 = createSprite(150,500,125,15)
    box4.shapeColor="blue"
    ball = createSprite(random(20,750),475,20,20)
    ball.shapeColor="white"
    ball.velocityX=3
    ball.velocityY=-3
    

    //create box sprite and give velocity

}

function draw() {
    background("grey");
    //create edgeSprite
    edges=createEdgeSprites()
    ball.bounceOff(edges)
    //add condition to check if box touching surface and make it box
    if(box1.isTouching(ball) && ball.bounceOff(box1)){
      ball.shapeColor="green"
    }
    
    if(box2.isTouching(ball) && ball.bounceOff(box2)){
      ball.shapeColor="pink"
    }

    if(box3.isTouching(ball) && ball.bounceOff(box3)){
      ball.shapeColor="yellow"
    }

    if(box4.isTouching(ball) && ball.bounceOff(box4)){
      ball.shapeColor="blue"
    }
  drawSprites()
}


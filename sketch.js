
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var engine, world;
var gameState = "serve";
var one;
var right;
var left;
var down;
var up;
var two;
var three;
function setup() {
    var canvas = createCanvas(1000,550);
    engine = Engine.create();
    world = engine.world;
one = new One(500,275);
right = new Right(950,275);
down = new Down(500,525);
up = new Up(500,25);
left = new Left(100,275);
four = new Four(500,275);
two = new Two(500,275);
three = new Three(500,275);
}
function draw() {
background(0);
Engine.update(engine);
right.display();
left.display();
up.display();
down.display();
if(gameState==="serve"){
one.display();

textSize(70);
text("HAPPY",385,150);
textSize(55);
text("MOTHER'S",355,300);
textSize(70);
text("DAY",420,450);

if(keyCode===39){
    gameState="play";
    one.visible = false;
    three.visible = false;
    four.visible = false;
    two.visible = true;


}
if(keyCode===38){
    gameState="plays";
    three.visible = true;
    one.visible = false;
    two.visible = false;
    four.visible = false;
}

if(keyCode===40){
    gameState="end";
    one.visible = false;
    two.visible = false;
    three.visible = false;
     four.visible = true;
}
}
if(gameState==="play"){
    two.display();
    one.visible = false;
    three.visible = false;
    four.visible = false;
    
    if(keyCode===38){
        gameState="plays";
        three.visible = true;
        one.visible = false;
        two.visible = false;
        four.visible = false;
    }
    if(keyCode===37){
        gameState="serve";
        one.visible = true;
        two.visible = false;
        three.visible = false;
         four.visible = false;
    }
    if(keyCode===40){
        gameState="end";
        one.visible = false;
        two.visible = false;
        three.visible = false;
         four.visible = true;
    }
}

if(gameState==="plays"){
    three.display();

    if(keyCode===39){
        gameState="play";
        one.visible = false;
        three.visible = false;
        four.visible = false;
        two.visible = true;
    
    
    }
   
    if(keyCode===37){
        gameState="serve";
        one.visible = true;
        two.visible = false;
        three.visible = false;
         four.visible = false;
    }
    if(keyCode===40){
        gameState="end";
        one.visible = false;
        two.visible = false;
        three.visible = false;
         four.visible = true;
    }
}
if(gameState==="end"){
    four.display();
    if(keyCode===39){
        gameState="play";
        one.visible = false;
        three.visible = false;
        four.visible = false;
        two.visible = true;
    
    
    }
    if(keyCode===38){
        gameState="plays";
        three.visible = true;
        one.visible = false;
        two.visible = false;
        four.visible = false;
    }
    if(keyCode===37){
        gameState="serve";
        one.visible = true;
        two.visible = false;
        three.visible = false;
         four.visible = false;
    }
    
}
/*
arrow left	37
arrow up	38
arrow right	39
arrow down	40
*/

}
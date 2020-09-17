
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  bin1 = new Dustbin(575,650,200,20);
	bin2 = new Dustbin(475,570,20,140);
  bin3 = new Dustbin(675,570,20,140);
  ground = new Ground();
  ball = new Paper(40,40,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.paper,ball.paper.position,{x:65,y:-65});
  }
}


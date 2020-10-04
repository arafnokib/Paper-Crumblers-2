
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1;
var ground;
var ball;
var box2;
var box3;
var trash;



function preload()
{
  trsh = loadImage("trash.png");
  paper = loadImage("paper.png");

}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ground = new Ground(200,570,1600,10);
  //box1 = new Box(570,560,100,10)
 //  box2 = new Box(525, 530, 10,50)
 // box3 = new Box(615, 530, 10,50)
  ball = new Ball(100,0,25);
  trash = new Box(400,480,100,100)

  
}
 

function draw() {
  rectMode(CENTER);
  background(225);
  
  drawSprites();
 ground.display();
 //box1.display();
 //box2.display();
 //box3.display();
 ball.display();
 ball.scale = 0.1;
 trash.display();


 keyPressed();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position,{x:85,y:-85});
  }
}


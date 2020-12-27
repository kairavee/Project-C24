
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,dustbin1,dustbin3,dustbin2;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(700, 600);

	groundSprite=createSprite(300, 550, 800,10);
	groundSprite.shapeColor=("yellow")

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(100, 100, 700, 10 , {isStatic:true} );
     World.add(world, ground);


	//Create the Bodies Here
	paper=new Paper(50,535,10)
	dustbin1=new Dustbin(395,498,20,60);
	dustbin3=new Dustbin(590,498,20,60);
	dustbin2=new Dustbin(491,535,200,20);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display()
  dustbin1.display()
  dustbin3.display()
  dustbin2.display()
  keyPressed();

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) 
	{
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
   }
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, trash, ground;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,450,70)
	ground = new Ground(width/2,670,width,20)
	trash = new Trash(1200,650)



	Engine.run(engine);
}


function draw() {
 
  background(217, 255, 251);
  //Engine.update(engine);
  
  paper.display();
  ground.display(); 
  trash.display();
 
  Engine.update(engine);
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
	}
}




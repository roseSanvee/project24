
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,plane,stone,iron; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    background(0);

	engine = Engine.create();
	world = engine.world;
    hammer = new Hammer(200,30);
	stone  = new Stone(300,400,110,30);
	ground = new Ground(600,height,1200,20);
  iron    = new Iron(500,200,100,89)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
 stone.display();
  ground.display();
  iron.display();
  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Bob1,Bob2,Bob3,Bob4,Bob5;
var roof;
function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;
	roof = new Ground(350,100,300,30);
    Bob1 = new bob();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(235);
  
  roof.display();
  Bob1.display();
 
}




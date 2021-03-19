
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var redbox1,redbox2,redbox3;

var paper,Ground
function setup() {
	createCanvas(1600, 700);

	






	engine = Engine.create();
	world = engine.world;

																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																									
	 paper = new Paper1(200,450,40);

	 Ground = new ground(800,690,1600,20)
	dustbin = new Dustbin(1200,650)
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
 Ground.display();
 dustbin.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



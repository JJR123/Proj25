const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render; 
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, dustbin,d1,d2,d3; 
var d1,d2,d3,d4,d5;

function preload()
{
	
} 


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	packageBody = new Paper(100,698);
	packageBody.debug='true'
	ground= new Ground(400,700,800,20); 
	dustbin=new Dustbin(700,680,150,10);  
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(127,127,127); 

  packageBody.display(); 
  
  ground.display();  
  dustbin.display(); 
  packageBody.display(); 


  drawSprites();
  keyPressed();  
  keyDown();

}
function keyPressed(){ 
	if(keyCode === UP_ARROW) { 
		Matter.Body.applyForce(packageBody.body,packageBody.body.position, {x:5,y:-10});  
	
	} 
	
}  
function keyDown(){ 

	if(keyCode === DOWN_ARROW){ 
		Matter.Body.applyForce(packageBody.body,packageBody.body.position, {x:-5,y:5});  


	}

}
 
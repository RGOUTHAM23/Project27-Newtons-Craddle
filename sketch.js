
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof = new Roof(480,200,400,20);

	bob1 = new Bob(320,575,40);
	bob2= new Bob(400,575,40);
  bob3= new Bob(480,575,40);
  bob4= new Bob(560,575,40);
  bob5= new Bob(640,575,40);
	
  chain1 = new Chain(bob1.body,roof.body,-160);
  chain2 = new Chain(bob2.body,roof.body,-80);
  chain3 = new Chain(bob3.body,roof.body,0);
  chain4 = new Chain(bob4.body,roof.body,80);
  chain5 = new Chain(bob5.body,roof.body,160);



	Engine.run(engine);
  
}


function draw() {
  
  background(200);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce( bob1.body, bob1.body.position, {x: -100, y: -100});
 }
}



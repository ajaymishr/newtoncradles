
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,ball5,roof1,roof2,roof3,roof4,roof5,chain1,chain2,chain3,chain4,chain5;

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
ball1=new ball(300,500);
ball2=new ball(350,500);
ball3=new ball(400,500);
ball4=new ball(450,500);
ball5=new ball(500,500);
roof1=new Roof(250,150,50,20);
roof2=new Roof(300,150,50,20);
roof3=new Roof(350,150,50,20);
roof4=new Roof(400,150,50,20);
roof5=new Roof(450,150,50,20);
chain1=new Chain(roof4.body,ball4.body)
chain2=new Chain(roof5.body,ball5.body)
chain3=new Chain(roof3.body,ball3.body)
chain4=new Chain(roof2.body,ball2.body)
chain5=new Chain(roof1.body,ball1.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("blue")
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  if(keyWentDown("space")){
Body.applyForce(ball1.body,ball1.body.position,{x:-130,y:0})
}
  drawSprites();
 
}




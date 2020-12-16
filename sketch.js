const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var ground;

function setup() {
  createCanvas(500, 800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, height, 500, 10);
  
 

 
}

function draw() {
  background(0, 0, 0);  
  
  Engine.update(engine);

  if(frameCount%90 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }
  
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 200));
  }
  for(var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 275));
  }
  for(var j = 45; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 350));
  }
  for(var j = 20; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 425));
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  
  ground.display();
  
}
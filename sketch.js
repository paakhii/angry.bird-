//namespacing
const Engine =Matter.Engine
const World = Matter.World
const Bodies= Matter.Bodies

var engine,world

function setup() {
  createCanvas(1200, 400);
 
engine = Engine.create()
world = engine.world

box1 = new box(700,320,70,70)
ground1 = new ground()
box2 = new box(920,320,70,70)
pig1= new pig (810,350)
log1 = new log (810,180,300,PI/2)
}

function draw() {
  background(0); 

  Engine.update(engine)
  ground1.display()
  box1.display()
  box2.display()
  pig1.display()
  log1.display()
}
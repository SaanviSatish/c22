const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine,world;
var ground;
var ball;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  var ground_option={
    isStatic:true
  }

  var ball_option={
    restitution:1.0
  }
  ground = Bodies.rectangle(20,380,700,20,ground_option);
  World.add(world,ground);
  ball = Bodies.circle(100,100,30,ball_option);
  World.add(world,ball);


}

function draw() {
  background(255,255,255);
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,700,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);

  //drawSprites();
}
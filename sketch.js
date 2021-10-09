
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var ball;
var button;

var top_wall;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 
  button = createImg('up.png');
  button.position(10,10);
  button.size(55,55);
  button.mouseClicked(vForce);

  ground =new Ground(200,390,400,20);

  var ball_options = {
    restitution: 0.99,
    frictionAir:0.01
  }
 
  ball = Bodies.circle(100,20,10,ball_options)
  World.add(world,ball);

  top_wall = new Ground(50,200,30,20);
  top_wall1 = new Ground(150,200,30,20);
  top_wall2 = new Ground(250,200,30,20);
  top_wall3 = new Ground(350,200,30,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() 
{
  background(0);

  ground.show();
  top_wall.show();
  top_wall1.show();
  top_wall2.show();
  top_wall3.show();
  fill("lightgreen")
  ellipse(ball.position.x,ball.position.y,15);
  Engine.update(engine);

}

function vForce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.010});

}
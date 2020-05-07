const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint ;

var engine, world;
var holder ;
var constrainedLog ;
var chain ;
var box1,box2,box3,box4,box5,box6,box7;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    holder= new Log (100,200,100,25);
    ground = new Ground(200,375,400,60);
    
    box1 = new Box (50,250,50,50);
    box2 = new Box (150,250,50,50);
    box3 = new Box (250,250,50,50);
    box4 = new Box (350,250,50,50);
    box5 = new Box (100,200,50,50);
    box7 = new Box (200,200,50,50);
    box6 = new Box (300,200,50,50);

    
    constrainedLog = new Box (200,200,25,25);
    chain= new Chain (holder.body,constrainedLog.body);
    
}

function draw(){
    background("blue");
    Engine.update(engine);
    holder.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    chain.display();
    constrainedLog.display();
    ground.display();

    push();
    text("Please Remove All The 7 Boxes",100,100)
    stroke(4);
    fill("megenta");
    pop();
}

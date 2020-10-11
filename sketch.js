const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var umbrella1;

function preload(){
    
}

function setup(){
   createCanvas(300,600);
   engine = Engine.create();
   world = engine.world;
   umbrella1 = new Umbrella(150,200);
}

function draw(){
    background(0);
    umbrella1.display();
    drawSprites();
}   


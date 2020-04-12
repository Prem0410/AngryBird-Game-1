const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var Arnav,Mahi,Siya,Ishan;
var backgroundImg,platform;
var bird, slingShot;
var gamestate = "onSling";
var score = 0;
var slingShot;

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1300,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(1000,320,70,70);
    box2 = new Box(900,240,70,70);
    box3 = new Box(1100,240,70,70);
    box4 = new Box(1100,150,70,70);
    box5 = new Box(900,160,70,70);
    box6 = new Box(850,320,70,70);
    box7 = new Box(1150,320,70,70);


    Arnav = new ArnavN(900, 350);
    Ishan = new IshanM(1100, 350);
    Siya = new SiyaJ(1000, 220);
    Mahi = new MahiS(1000, 170);
   
   
    log1 = new Log(1000,260,300, PI/2);
    log2 = new Log(1100,120,50, PI/2);
    log3 = new Log(1000,170,300, PI/2);
    log4 = new Log(1000,110,180, PI/2);
    log5 = new Log(900,120,50, PI/2);
    log6 = new Log(1000,170,100, PI/2); 
    
    
    bird = new Bird(200,50);
   slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);

   // noStroks();
    textSize(35);
    fill("white")
    text("Score"+ score,width-900,50);
    Engine.update(engine);

    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

   
    Mahi.display();
    Siya.display();
    Ishan.display();
    Arnav.display();

    Mahi.score();
    Siya.score();
    Ishan.score();
    Arnav.score();
    
   
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
   

    bird.display();
    ground.display();
    platform.display();
    slingshot.display();    
}


function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(bird.body)

    }
}
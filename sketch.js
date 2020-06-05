const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball;
var bg = "light.jpg";
var backgroundImg;
var score = 0; 
function preload() {
  getBackgroundImage();
  polygon_img = loadImage("polygon.png");
}
function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ball = Bodies.circle(50, 100, 20);
  World.add(world, ball);

  ground = new Ground1(450, 390, 900, 20);
  stand1 = new Ground1(390, 300, 250, 10);
  stand2 = new Ground1(700, 200, 200, 10);

  block1 = new Box(300, 275, 30, 40);
  block2 = new Box(330, 275, 30, 40);
  block3 = new Box(360, 275, 30, 40);
  block4 = new Box(390, 275, 30, 40);
  block5 = new Box(420, 275, 30, 40);
  block6 = new Box(450, 275, 30, 40);
  block7 = new Box(480, 275, 30, 40);
  block8 = new Box(330, 235, 30, 40);
  block9 = new Box(360, 235, 30, 40);
  block10 = new Box(390, 235, 30, 40);
  block11 = new Box(420, 235, 30, 40);
  block12 = new Box(450, 235, 30, 40);
  block13 = new Box(360, 195, 30, 40);
  block14 = new Box(390, 195, 30, 40);
  block15 = new Box(420, 195, 30, 40);
  block16 = new Box(390, 155, 30, 40);

  blocks1 = new Box(640, 175, 30, 40);
  blocks2 = new Box(670, 175, 30, 40);
  blocks3 = new Box(700, 175, 30, 40);
  blocks4 = new Box(730, 175, 30, 40);
  blocks5 = new Box(760, 175, 30, 40);
  blocks6 = new Box(670, 135, 30, 40);
  blocks7 = new Box(700, 135, 30, 40);
  blocks8 = new Box(730, 135, 30, 40);
  blocks9 = new Box(700, 95, 30, 40);

  slingShot = new SlingShot(this.ball, { x: 100, y: 100 });

}
function draw() {
  if(backgroundImg)
  background(backgroundImg)
  Engine.update(engine);
  fill(255)
  textSize(20)
 text("Score: "+score,700,70)

  fill("skyblue");
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("lightyellow");
  block1.display();
  block1.Score();
  block2.display();
  block2.Score();
  block3.display();
  block3.Score();
  block4.display();
  block4.Score();
  block5.display();
  block5.Score();
  block6.display();
  block6.Score();
  block7.display();
  block7.Score();
  fill("red");
  block8.display();
  block8.Score();
  block9.display();
  block9.Score();
  block10.display();
  block10.Score();
  block11.display();
  block11.Score();
  block12.display();
  block12.Score();
  fill("brown");
  block13.display();
  block13.Score();
  block14.display();
  block14.Score();
  block15.display();
  block15.Score();
  fill("pink");
  block16.display();
  block16.Score();
  fill("blue");
  blocks1.display();
  blocks1.Score();
  blocks2.display();
  blocks2.Score();
  blocks3.display();
  blocks3.Score();
  blocks4.display();
  blocks4.Score();
  blocks5.display();
  blocks5.Score();
  fill("gold");
  blocks6.display();
  blocks6.Score();
  blocks7.display();
  blocks7.Score();
  blocks8.display();
  blocks8.Score();
  fill("orange")
  blocks9.display();
  blocks9.Score();
  fill("red");
  imageMode(CENTER)
  image(polygon_img, ball.position.x, ball.position.y, 40, 40);

  slingShot.display();
}
function mouseDragged() {
  Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingShot.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(this.ball);
  }
}
async function getBackgroundImage() {
  response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON.datetime);
  var datetime, hour;
  datetime = responseJSON.datetime;
  hour = datetime.slice(11, 13);

  if (hour >= 06 && hour <= 20) {
    bg = "light.jpg"
  } else {
    bg = "dark.jpg"
  }
  backgroundImg = loadImage(bg)
  console.log(backgroundImg)
}

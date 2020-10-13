var Verna, Elantra, Creta, Benz, cars;
var wall;
var speed;
var start;
var deformation, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55, 90);
  weight = random(400, 1500);

  cars = createGroup();

  Verna = createSprite(50, 80, 50, 50);
  Elantra = createSprite(50, 160, 50, 50);
  Creta = createSprite(50, 240, 50, 50);
  Benz = createSprite(50, 320, 50, 50);
  
  cars.add(Verna);
  cars.add(Elantra);
  cars.add(Creta);
  cars.add(Benz);
  
  Verna.weight = 1913;
  Elantra.weight = 2137;
  Creta.weight = 2017;
  Benz.weight = 1811;

  deformation = (0.5 * this.weight * (speed * 2)) / 22500;

  // cars.setVelocityEach(speed, 0);

  wall = createSprite(1500, 200, 60, height - 140);

  start = createSprite(800, 200, 100, 100);
}

function draw() {
  background("lightgreen");
  console.log(Verna.deformation);
  deformation = (0.5 * this.weight * (speed * 2)) / 22500;
  
  if(mousePressedOver(start))
  {
    Verna.setVelocity(speed, 0);
    start.destroy();
  }

  if((wall.x - Verna.x) < (wall.width + Verna.width) / 2)
  {
    Verna.setVelocity(0, 0);
    Elantra.setVelocity(speed, 0);
   }  
  
  if((wall.x - Elantra.x) < (wall.width + Elantra.width) / 2)
  {
    Elantra.setVelocity(0, 0);
    Creta.setVelocity(speed, 0);
  }  
  
  if((wall.x - Creta.x) < (wall.width + Creta.width) / 2)
  {
    Creta.setVelocity(0, 0);
    Benz.setVelocity(speed, 0);
  }  
  
  if((wall.x - Benz.x) < (wall.width + Benz.width) / 2)
  {
    Benz.setVelocity(0, 0);
  }
  // cars.collide(wall); 
  drawSprites();
}
class Car {
  constructor() {
    this.x = 50;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  display() {
    rect(this.x, this.y, this.width, this.height);
  }
}

var vernaSprite, elantraSprite, cretaSprite, benzSprite, cars;
var wall;
var start;
var speed;

function setup() {
  speed = Math.round(random(55, 90))
  createCanvas(1600, 400);

  cars = createGroup();

  vernaSprite = createSprite(50, 80, 50, 50);
  vernaSprite.visible = false;

  elantraSprite = createSprite(50, 160, 50, 50);
  elantraSprite.visible = false;

  cretaSprite = createSprite(50, 240, 50, 50);
  cretaSprite.visible = false;

  benzSprite = createSprite(50, 320, 50, 50);
  benzSprite.visible = false;

  cars.add(vernaSprite);
  cars.add(elantraSprite);
  cars.add(cretaSprite);
  cars.add(benzSprite);

  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeColor = (80, 80, 80)
  wall.scale = 0.45;

  start = createSprite(800, 200, 100, 100);
  
  verna = new Car;
  verna.y = vernaSprite.y;

  elantra = new Car;
  elantra.y = elantraSprite.y;

  creta = new Car;
  creta.y = cretaSprite.y;

  benz = new Car;
  benz.y = benzSprite.y;
}

function draw() {
  background("lightgreen");
  
  verna.x = vernaSprite.x;
  elantra.x = elantraSprite.x;
  creta.x = cretaSprite.x;
  benz.x = benzSprite.x;

  if (mousePressedOver(start)) {
    vernaSprite.setVelocity(speed, 0);
    start.destroy();
  }

  if ((wall.x - vernaSprite.x) < (wall.width + vernaSprite.width) / 2) {
    vernaSprite.setVelocity(0, 0);
    elantraSprite.setVelocity(speed, 0);
  }

  if ((wall.x - elantraSprite.x) < (wall.width + elantraSprite.width) / 2) {
    elantraSprite.setVelocity(0, 0);
    cretaSprite.setVelocity(speed, 0);
  }

  if ((wall.x - cretaSprite.x) < (wall.width + cretaSprite.width) / 2) {
    cretaSprite.setVelocity(0, 0);
    benzSprite.setVelocity(speed, 0);
  }

  if ((wall.x - benzSprite.x) < (wall.width + benzSprite.width) / 2) {
    benzSprite.setVelocity(0, 0);
  }

  verna.display();
  elantra.display();
  creta.display();
  benz.display();

  drawSprites();
}
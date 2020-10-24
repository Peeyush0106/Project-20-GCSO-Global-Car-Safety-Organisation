//A new sketch after sketchInitial.js

class Car {
  constructor() {
    this.x = 50;
    this.y = 200;
    this.weight;
    this.speed = Math.round(random(55, 90));
    this.sprite;
    this.deformation = (0.5 * this.weight * this.speed * this.speed) / 22500;
    this.width = 50;
    this.height = 50;
    this.fill = "blue";
    this.shouldMove = false;
  }
  display() {
    fill(this.fill);
    rect(this.x, this.y, this.width, this.height);
  }
}

// var vernaSprite, elantraSprite, cretaSprite, benzSprite, cars;
var wall;
var start;
var speed;
// var vernaShouldMove = false;;
// var elantraShouldMove = fasle;
// var cretaShouldMove = fasle;
// var benzShouldMove = fasle;

function setup() {
  createCanvas(1600, 400);

  // cars = createGroup();

  // vernaSprite = createSprite(50, 80, 50, 50);
  // elantraSprite = createSprite(50, 160, 50, 50);
  // cretaSprite = createSprite(50, 240, 50, 50);
  // benzSprite = createSprite(50, 320, 50, 50);

  // cars.add(vernaSprite);
  // cars.add(elantraSprite);
  // cars.add(cretaSprite);
  // cars.add(benzSprite);

  // cars.setVisibleEach(false);

  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeColor = (80, 80, 80)
  wall.scale = 0.45;

  start = createSprite(800, 200, 100, 100);

  verna = new Car();
  verna.y = 80;
  // verna.sprite = vernaSprite;
  verna.weight = 1913;
  verna.speed = speed;

  elantra = new Car();
  elantra.y = 160;
  // elantra.sprite = elantraSprite;
  elantra.weight = 2137;
  elantra.speed = speed;

  creta = new Car();
  creta.y = 240;
  // creta.sprite = cretaSprite;
  creta.weight = 2017;
  creta.speed = speed;

  benz = new Car();
  benz.y = 320;
  // benz.sprite = benzSprite;
  benz.weight = 1811;
  benz.speed = speed;

}

function draw() {
  background("lightgreen");
  console.log(World.frameCount);

  // verna.x = vernaSprite.x;
  // elantra.x = elantraSprite.x;
  // creta.x = cretaSprite.x;
  // benz.x = benzSprite.x;

  // verna.y = vernaSprite.y;
  // elantra.y = elantraSprite.y;
  // creta.y = cretaSprite.y;
  // benz.y = benzSprite.y;

  if (mousePressedOver(start)) {
    verna.shouldMove = true;
    // vernaSprite.setVelocity(speed, 0);
    start.destroy();
  }

  if (verna.shouldMove) {
    // setVelocity(verna, verna.speed, 0);
    setVelocity(verna, verna.speed, 0);
  }
  
  if (elantra.shouldMove) {
    // setVelocity(verna, verna.speed, 0);
    setVelocity(elantra, elantra.speed, 0);
  }
  
  if (creta.shouldMove) {
    // setVelocity(verna, verna.speed, 0);
    setVelocity(creta, creta.speed, 0);
  }
  
  if (benz.shouldMove) {
    // setVelocity(verna, verna.speed, 0);
    setVelocity(benz, benz.speed, 0);
  }

  // runCar(vernaSprite, cretaSprite);
  // runCar(cretaSprite, elantraSprite);
  // runCar(elantraSprite, benzSprite);
  // runCar(benzSprite);


  // runCar(vernaSprite, cretaSprite);
  // runCar(cretaSprite, elantraSprite);
  // runCar(elantraSprite, benzSprite);
  // runCar(benzSprite);

  verna.display();
  elantra.display();
  creta.display();
  benz.display();

  drawSprites();
}

function runCar(movingCar, startingCar) {
  if ((wall.x - movingCar.x) < (wall.width + movingCar.width) / 2) {
    movingCar.shouldMove = false;
    // setVelocity(movingCar, 0, 0);
    // movingCar.setVelocity(0, 0);
    if (startingCar) {

      // setVelocity(startingCar, startingCar.speed, 0);
      startingCar.shouldMove = true;
      // startingCar.setVelocity(speed, 0);
    }
    if (movingCar.deformation < 80) {
      movingCar.fill = "green";
    }
    else if (movingCar.deformation > 80 && movingCar.deformation < 180) {
      movingCar.fill = "orange";
    }
    else if (movingCar.deformation > 180) {
      movingCar.fill = "red";
    }
  }
}

function setVelocity(object, velocityX, velocityY)
{
  // object.x = 200;
  object.x += velocityX;
  // object.y = 200;
  // object.y += velocityY;
}
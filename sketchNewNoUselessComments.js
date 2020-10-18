class Car {
  constructor() {
    this.x = 50;
    this.y = 200;
    this.weight;
    this.speed = Math.round(random(55, 90));
    //this.sprite;
    this.deformation; // = (0.5 * this.weight * this.speed * this.speed) / 22500;
    this.width = 50;
    this.height = 50;
    this.fill = "blue";
    this.shouldMove = false;
  }
  display() {
    fill(this.fill);
    rect(this.x, this.y, this.width, this.height);
  }
  setDeformationValue(){
    this.deformation = (0.5 * this.weight * this.speed * this.speed) / 22500;
    console.log(this.deformation);
  }
}

var wall;
var start;
var speed;

function setup() {
  createCanvas(1600, 400);

  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeColor = (80, 80, 80)
  wall.scale = 0.45;

  start = createSprite(800, 200, 100, 100);

  verna = new Car();
  verna.y = 80;
  verna.weight = Math.round(random(400, 1300));//1913;
  verna.setDeformationValue();
  //verna.speed = speed;

  elantra = new Car();
  elantra.y = 160;
  elantra.weight = Math.round(random(400, 1300));//2137;
  elantra.setDeformationValue();
  //elantra.speed = speed;

  creta = new Car();
  creta.y = 240;
  creta.weight = Math.round(random(400, 1300));//2017;
  creta.setDeformationValue();
  //creta.speed = speed;

  benz = new Car();
  benz.y = 320;
  benz.weight = Math.round(random(400, 1300));//1811;
  benz.setDeformationValue();
  //benz.speed = speed;

}

function draw() {
  background("lightgreen");
  // console.log(World.frameCount);

  if (mousePressedOver(start)) {
    verna.shouldMove = true;
    start.destroy();
  }

  if (verna.shouldMove) {
    setVelocity(verna, verna.speed, 0);
  }

  if (elantra.shouldMove) {
    setVelocity(elantra, elantra.speed, 0);
  }

  if (creta.shouldMove) {
    setVelocity(creta, creta.speed, 0);
  }

  if (benz.shouldMove) {
    setVelocity(benz, benz.speed, 0);
  }

  runCar(verna, creta);
  runCar(creta, elantra);
  runCar(elantra, benz);
  runCar(benz);

  verna.display();
  elantra.display();
  creta.display();
  benz.display();

  drawSprites();
}

function runCar(movingCar, startingCar) {
  if ((wall.x - movingCar.x) < (wall.width + movingCar.width) / 2) {
    movingCar.shouldMove = false;
    if (startingCar) {
      startingCar.shouldMove = true;
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

function setVelocity(car, velocityX, velocityY) {
  // console.log("--------Velocity has been Set---------------");
  // object.x = 200;
  car.x += velocityX;
  // object.y = 200;
  car.y += velocityY;
  //console.log("--------car X--------------" + car.x);
  //console.log("--------car Y--------------" + car.y);
}
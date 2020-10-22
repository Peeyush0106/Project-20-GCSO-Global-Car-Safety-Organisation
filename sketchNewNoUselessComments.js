class BlockWall {
  constructor() {
    this.x = 1500;
    this.y = 0;
    this.width = 60;
    this.height = height;
    this.centerX = this.x + (this.width / 2);
    this.centerY = this.y + (this.height / 2);
  }
  display() {
    // fill(80, 80, 80);
    fill("lightgreen");
    rect(this.x, this.y, this.width, this.height);
  }
}

class Car {
  constructor() {
    this.x = 50;
    this.y;
    this.weight;
    this.speed = Math.round(random(55, 90));
    //this.sprite;
    this.deformation; // = (0.5 * this.weight * this.speed * this.speed) / 22500;
    this.width = 50;
    this.height = 50;
    this.centerX = this.x + (this.width / 2);
    this.centerY = this.y + (this.height / 2);
    this.fill = "blue";
    this.shouldMove = false;
    this.brand;
    this.carName;
  }
  display() {
    fill(this.fill);
    rect(this.x, this.y, this.width, this.height);
  }
  setDeformationValue() {
    this.deformation = (0.5 * this.weight * this.speed * this.speed) / 22500;
    console.log(this.deformation);
  }
  setCenterCoordinates() {
    this.centerX = this.x + (this.width / 2);
    this.centerY = this.y + (this.height / 2);
  }
}

// var wall;
var start;
var speed;
var right, left, up, down;

var turboImage, enzoImage, gallardoImage, viperImage;

function preload() {
  turboImage = loadImage("Turbo2New.png");
  enzoImage = loadImage("enzo.png");
  gallardoImage = loadImage("Gallardo.png");
  viperImage = loadImage("Viper.png");
}

function setup() {
  createCanvas(1600, 400);

  turboImage.width = (turboImage.width / 10);
  turboImage.height = (turboImage.height / 10);

  enzoImage.width = (enzoImage.width / 10);
  enzoImage.height = (enzoImage.height / 10);

  gallardoImage.width = (gallardoImage.width / 10);
  gallardoImage.height = (gallardoImage.height / 10);

  viperImage.width = (viperImage.width / 10);
  viperImage.height = (viperImage.height / 10);

  // wall = createSprite(1500, 200, 60, height * 2);
  // wall.shapeColor = (80, 80, 80);
  // // wall.visible = false;
  // // wall.scale = 0.45;

  wall = new BlockWall();
  console.log("Wall CenterX - " + wall.centerX);
  console.log("Wall CenterY - " + wall.centerY);

  start = createSprite(800, 200, 100, 100);

  turbo = new Car();
  turbo.brand = "Porsche";
  turbo.carName = "Porsche 911 996 Turbo";
  turbo.y = 70;
  // turbo.weight = Math.round(random(400, 1300));//1913;
  turbo.weight = Math.round(random(400, 1300));//Exact weight of turbo in kg;
  turbo.setDeformationValue();
  //turbo.speed = speed;

  viper = new Car();
  viper.brand = "Dodge";
  viper.carName = "Dodge Viper";
  viper.y = 150;
  viper.weight = Math.round(random(400, 1300));//2137;
  viper.setDeformationValue();
  //viper.speed = speed;

  gallardo = new Car();
  gallardo.brand = "Lamborghini"
  gallardo.carName = "Lamborghini Gallardo"
  gallardo.y = 230;
  gallardo.weight = Math.round(random(400, 1300));//2017;
  gallardo.setDeformationValue();
  //gallardo.speed = speed;

  enzo = new Car();
  enzo.brand = "Ferrari";
  enzo.carName = "Ferrari Enzo";
  enzo.y = 310;
  enzo.weight = Math.round(random(400, 1300));//1811;
  enzo.setDeformationValue();
  //enzo.speed = speed;
}

function draw() {
  background("lightgreen");
  // console.log(World.frameCount);

  if (mousePressedOver(start)) {
    turbo.shouldMove = true;
    start.destroy();
  }

  if (turbo.shouldMove) {
    setVelocity(turbo, turbo.speed, 0);
  }
  if (gallardo.shouldMove) {
    setVelocity(gallardo, gallardo.speed, 0);
  }

  if (viper.shouldMove) {
    setVelocity(viper, viper.speed, 0);
  }

  if (enzo.shouldMove) {
    setVelocity(enzo, enzo.speed, 0);
  }

  runCar(turbo, gallardo);
  runCar(gallardo, viper);
  runCar(viper, enzo);
  runCar(enzo);

  // runCar(turbo, viper);
  // runCar(viper, enzo);
  // runCar(enzo, gallardo);
  // runCar(gallardo);

  // turbo.display();
  // viper.display();
  // gallardo.display();
  // enzo.display();
  wall.display();
  
  image(turboImage, turbo.x - 25, turbo.y - 25);
  image(enzoImage, enzo.x - 25, enzo.y - 60);
  image(gallardoImage, gallardo.x - 25, gallardo.y - 25);
  image(viperImage, viper.x - 25, viper.y - 25);
  
  drawSprites();
  
  fill("red");
  textSize(25);
  // text("Mouse X: " + mouseX, 600, 150);
  // text("Mouse Y: " + mouseY, 600, 250);
  
    showCarNames(turbo);
    showCarNames(enzo);
    showCarNames(gallardo);
    showCarNames(viper);

}

function showCarNames(object) {
  text(object.carName, 300, object.y + 20);
}

function runCar(movingCar, startingCar) {
  // if ((wall.x - movingCar.x) < (wall.width + movingCar.width) / 2) {
    //console.log("Car to stop: " + movingCar.carName);
  if (isTouching(movingCar, wall)) {
    //console.log("----Car Touched---- ---- Touched Car's Name: " + movingCar.carName);
    movingCar.shouldMove = false;
    if (startingCar) {
      //console.log("Car to start: " + startingCar.carName);
      startingCar.shouldMove = true;
    }
    if (movingCar.deformation < 100) {
      movingCar.fill = "green";
    }
    else if (movingCar.deformation > 100 && movingCar.deformation < 180) {
      movingCar.fill = "orange";
    }
    else if (movingCar.deformation > 180) {
      movingCar.fill = "red";
    }
  }
}

function isTouching(target1, target2) {
  // if (((target2.x - target1.x) <= (target2.width + target1.width) / 2)
  //   && (target1.x - (target2.x) <= (target2.width + target1.width) / 2)
  //   && ((target2.y - target1.y) <= (target2.height + target1.height) / 2)
  //   && ((target1.y - target2.y) <= (target2.height + target1.height) / 2)) {
  if ((target2.centerX - target1.centerX) <= (target2.width + target1.width) / 2
    && (target1.centerX - (target2.centerX) <= (target2.width + target1.width) / 2)
    && ((target2.centerY - target1.centerY) <= (target2.height + target1.height) / 2)
    && ((target1.centerY - target2.centerY) <= (target2.height + target1.height) / 2)) {
    return true;
  }
}

function setVelocity(car, velocityX, velocityY) {
  car.x += velocityX;
  car.y += velocityY;
  car.setCenterCoordinates();
}
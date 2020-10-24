class BlockWall {
  constructor() {
    this.x = 1400;
    this.y = 0;
    this.width = 60;
    this.height = height;
    this.centerX = this.x + (this.width / 2);
    this.centerY = this.y + (this.height / 2);
  }
  display() {
    // fill(80, 80, 80);
    fill(80, 80, 80);
    rect(this.x, this.y, this.width, this.height);
  }
}

class StartGameButton {
  constructor() {
    this.x = 750;
    this.y = 150;
    this.centerX = this.x + (this.width / 2);
    this.centerY = this.y + (this.height / 2);
    this.width = 120;
    this.height = 50;
    this.buttonEnable = true;
    this.visible = true;
  }
  display() {
    // fill(80, 80, 80);
    if (this.visible === true) {
      fill("darkblue");
      rect(this.x, this.y, this.width, this.height);
      fill("white");
      textSize(30);
      text("Start!", (this.x + 10), (((this.y + this.height / 2) + 10)));
    }
  }
  clicked() {
    if (mouseX >= (this.x) && mouseX <= (this.x + this.width)
      && mouseY >= (this.y) && mouseY <= (this.y + this.height)) {
      if (start.buttonEnable) {
        turbo.shouldMove = true;
        this.visible = false;
        this.buttonEnable = false;
        startGame = true;
      }
    }
  }
}

class Car {
  constructor() {
    this.x = 50;
    this.y;
    this.weight;
    this.speed = Math.round(random(55, 90));
    //this.sprite;
    this.deformation = 0; // = (0.5 * this.weight * this.speed * this.speed) / 22500;
    this.width = 50;
    this.height = 50;
    this.centerX;
    this.centerY;
    this.fill = "blue";
    this.shouldMove = false;
    this.brand;
    this.carName;
  }
  display() {
    rect(this.x, this.y, this.width, this.height);
  }
  setDeformationValue() {
    this.deformation = (0.5 * this.weight * this.speed * this.speed) / 22500;
    // console.log(this.deformation);
  }
  setCenterCoordinates() {
    this.centerX = this.x + (this.width / 2);
    this.centerY = this.y + (this.height / 2);
  }

  reset() {
    this.x = 50;
    this.speed = Math.round(random(55, 90));
    this.centerX = this.x + (this.width / 2);
    this.centerY = this.y + (this.height / 2);
    this.shouldMove = false;
  }
}

// var wall;
var start;
var speed;
var right, left, up, down;

var startGame = true;

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
  // console.log("Wall CenterX - " + wall.centerX);
  // console.log("Wall CenterY - " + wall.centerY);

  // start = createSprite(800, 200, 100, 100);

  start = new StartGameButton();

  turbo = new Car();
  turbo.brand = "Porsche";
  turbo.carName = "Porsche 911 996 Turbo";
  turbo.y = 70;
  // turbo.weight = Math.round(random(400, 1300));//1913;
  turbo.weight = Math.round(random(400, 1300));//Exact weight of turbo in kg;
  // turbo.setDeformationValue();
  //turbo.speed = speed;

  viper = new Car();
  viper.brand = "Dodge";
  viper.carName = "Dodge Viper";
  viper.y = 150;
  viper.weight = Math.round(random(400, 1300));//2137;
  // viper.setDeformationValue();
  //viper.speed = speed;

  gallardo = new Car();
  gallardo.brand = "Lamborghini"
  gallardo.carName = "Lamborghini Gallardo"
  gallardo.y = 230;
  gallardo.weight = Math.round(random(400, 1300));//2017;
  // gallardo.setDeformationValue();
  //gallardo.speed = speed;

  enzo = new Car();
  enzo.brand = "Ferrari";
  enzo.carName = "Ferrari Enzo";
  enzo.y = 310;
  enzo.weight = Math.round(random(400, 1300));//1811;
  // enzo.setDeformationValue();
  //enzo.speed = speed;
}

function draw() {
  background("lightgreen");
  // console.log(World.frameCount);

  if (startGame) {
    // if (mouseClickedOver(start) && start.buttonEnable === true) {
    // if (mouseClicked(start) && start.buttonEnable === true) {
    //   turbo.shouldMove = true;
    //   start.clicked();
    // }

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
    start.display();

  }

  if (restartGameConditions(enzo)) {
    start.buttonEnable = true;
    start.visible = true;
    startGame = false
  }

  if (startGame === false) {
    console.log("Start Game = false");
    // turbo.x = 50;
    // gallardo.x = 50;
    // enzo.x = 50;
    // viper.x = 50;
    console.log("Mouse Pressed Over Start");
    turbo.reset();
    gallardo.reset();
    viper.reset();
    enzo.reset();
    turbo.setDeformationValue();
    gallardo.setDeformationValue();
    viper.setDeformationValue();
    enzo.setDeformationValue();
    startGame = true;
  }

  if (startGame) {
    showDeformations(turbo, turbo);
    showDeformations(viper, turbo);
    showDeformations(gallardo, turbo);
    showDeformations(enzo, turbo);
  }

  fill("red");
  textSize(25);
  line(220, 0, 220, 400);

  line(0, 20, 1600, 20);
  line(0, 110, 1600, 110);
  line(0, 190, 1600, 190);
  line(0, 270, 1600, 270);
  line(0, 360, 1600, 360);

  // text("Mouse X: " + mouseX, 600, 150);
  // text("Mouse Y: " + mouseY, 600, 250);

  image(turboImage, turbo.x, turbo.y - 55);
  image(viperImage, viper.x + 40, viper.y - 45);
  image(gallardoImage, gallardo.x + 40, gallardo.y - 35);
  image(enzoImage, enzo.x - 25, enzo.y - 70);

  showCarNames(turbo);
  showCarNames(enzo);
  showCarNames(gallardo);
  showCarNames(viper);
}

function showDeformations(car, firstRunningCar) {
  if (firstRunningCar.x === 50) {
    // if (isTouching(car, wall)) {
    fill(rgb(200, 0, 150));
    textSize(30);
    text("Damage: " + Math.round(car.deformation), car.x + 900, car.y + 30);
    if (car.deformation === NaN) {
      car.deformation = 0;
    }
  }
}

function mouseClicked() {
  // let d = dist(target.centerX, target.centerY, mouseX, mouseY);
  // if (d < target.width) {
  //   target.clicked();
  // }
  start.clicked();
  if (restartGameConditions(enzo)) {
    startGame = true;
  }
}

// function mouseClickedOver(target) {
//   var distance = dist(mouseX, mouseY, target.x, target.y);
//   console.log("mouse pressed");
//   if (distance <= 0 && mouseClicked()) {
//     return true;
//   }
// }

function restartGameConditions(lastCar) {
  if (isTouching(lastCar, wall)) {
    return true;
  }
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
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
    fill(80, 80, 80);
    rect(this.x, this.y, this.width, this.height);
  }
}

class GameButton {
  constructor(operator, visible) {
    this.x = 750;
    this.y = 150;
    this.centerX = this.x + (this.width / 2);
    this.centerY = this.y + (this.height / 2);
    this.width = 120;
    this.height = 50;
    this.buttonEnabled = visible;
    this.visible = visible;
    this.operator = operator;
  }
  display() {
    if (this.visible === true) {
      fill("darkblue");
      rect(this.x, this.y, this.width, this.height);
      fill("white");
      textSize(30);
      text(this.operator, (this.x + 10), (((this.y + this.height / 2) + 10)));
    }
  }
  clicked() {
    if (mouseX >= (this.x) && mouseX <= (this.x + this.width)
      && mouseY >= (this.y) && mouseY <= (this.y + this.height)) {
      return true;
    }
  }
}

class Car {
  constructor() {
    this.x = 50;
    this.y;
    this.weight;
    this.speed = Math.round(random(55, 90));
    this.deformation = 0;
    this.width = 50;
    this.height = 50;
    this.centerX;
    this.centerY;
    this.fill = "white";
    this.shouldMove = false;
    this.brand;
    this.carName;
  }
  display() {
    rect(this.x, this.y, this.width, this.height);
  }
  setDeformationValue() {
    this.deformation = (0.5 * this.weight * this.speed * this.speed) / 22500;
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
    // this.fill = "white";
  }
}

var start;
var speed;
var right, left, up, down;

var gameState = "Ready";

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

  wall = new BlockWall();
  start = new GameButton("Start", true);
  reset = new GameButton("Reset", false);

  turbo = new Car();
  turbo.brand = "Porsche";
  turbo.carName = "Porsche 911 996 Turbo";
  turbo.y = 70;
  turbo.weight = Math.round(random(400, 1300));

  viper = new Car();
  viper.brand = "Dodge";
  viper.carName = "Dodge Viper";
  viper.y = 150;
  viper.weight = Math.round(random(400, 1300));

  gallardo = new Car();
  gallardo.brand = "Lamborghini"
  gallardo.carName = "Lamborghini Gallardo"
  gallardo.y = 230;
  gallardo.weight = Math.round(random(400, 1300));

  enzo = new Car();
  enzo.brand = "Ferrari";
  enzo.carName = "Ferrari Enzo";
  enzo.y = 310;
  enzo.weight = Math.round(random(400, 1300));
}

function draw() {
  background("lightgreen");

  turbo.setDeformationValue();
  gallardo.setDeformationValue();
  viper.setDeformationValue();
  enzo.setDeformationValue();

  if(gameState === 'Ready') {
    start.visible = true;
    start.buttonEnabled = true;
    start.display();

    turbo.reset();
    gallardo.reset();
    viper.reset();
    enzo.reset();    
  }

  wall.display();

  if (gameState === 'Running') {
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
    
  }
  
  if(gameState === "Stopped") {

    showDeformationColor(1160, turbo.y, turbo.fill, true);
    showDeformationColor(1160, viper.y, viper.fill, true);
    showDeformationColor(1160, gallardo.y, gallardo.fill, true);
    showDeformationColor(1160, enzo.y, enzo.fill, true);

    showDeformationText(turbo);
    showDeformationText(viper);
    showDeformationText(gallardo);
    showDeformationText(enzo);

    //Reset Button
    reset.visible = true;
    reset.buttonEnabled = true;
    reset.display();
  }

  if (restartGameConditions(enzo)) {
    gameState = "Stopped";
    
    //start.buttonEnabled = true;
    //start.visible = true;
    //startGame = false;
  }

  fill("red");
  textSize(25);
  line(220, 0, 220, 400);

  line(0, 20, 1600, 20);
  line(0, 110, 1600, 110);
  line(0, 190, 1600, 190);
  line(0, 270, 1600, 270);
  line(0, 360, 1600, 360);

  text("Mouse X: " + mouseX, 600, 150);
  text("Mouse Y: " + mouseY, 600, 250);

  image(turboImage, turbo.x, turbo.y - 55);
  image(viperImage, viper.x + 40, viper.y - 45);
  image(gallardoImage, gallardo.x + 40, gallardo.y - 35);
  image(enzoImage, enzo.x - 25, enzo.y - 70);

  showCarNames(turbo);
  showCarNames(enzo);
  showCarNames(gallardo);
  showCarNames(viper);
}

function showDeformationText(car) {
  //if (firstRunningCar.x === 50) {
    fill(rgb(200, 0, 150));
    textSize(30);
    text("Damage: " + Math.round(car.deformation), 950, car.y + 30);
    if (car.deformation === NaN) {
      car.deformation = 0;
    }
  //}
}
function showDeformationColor(x, y, damageZone, create) {
  if (create === true) {
    fill(damageZone);
    rect(x, y);
  }
}

function mouseClicked() {
  if(start.buttonEnabled){
    if (start.clicked()) {
      console.log("Start Clicked");
      turbo.shouldMove = true;
      start.visible = false;
      start.buttonEnabled = false;
      //startGame = true;
      gameState = "Running";
    }
  }

  if(reset.buttonEnabled){
    if (reset.clicked()) {
      console.log("Reset Clicked");
      gameState = "Ready";
      reset.visible = false;
      reset.buttonEnabled = false;
    }
  }

  // if (restartGameConditions(enzo)) {
  //   startGame = true;
  // }
}

function restartGameConditions(lastCar) {
  if (isTouching(lastCar, wall)) {
    return true;
  }
}

function showCarNames(object) {
  text(object.carName, 300, object.y + 20);
}

function runCar(movingCar, startingCar) {
  if (isTouching(movingCar, wall)) {
    movingCar.shouldMove = false;
    if (startingCar) {
      startingCar.shouldMove = true;
    }
    if (movingCar.deformation <= 100) {
      movingCar.fill = "green";
    }
    else if (movingCar.deformation > 100 && movingCar.deformation < 180) {
      movingCar.fill = "orange";
    }
    else if (movingCar.deformation >= 180) {
      movingCar.fill = "red";
    }

    showDeformationColor(1160, movingCar.y, movingCar.fill, true);
    showDeformationText(movingCar);
  }
}

function isTouching(target1, target2) {
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
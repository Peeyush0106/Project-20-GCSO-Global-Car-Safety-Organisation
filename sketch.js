// class Car {
//   constructor() {
//     this.x = 50;
//     this.width = 50;
//     this.height = 50;
//   }
//   display() {
//     rect(this.x, 0, this.width, this.height);
//   }
// }

var vernaSprite, elantraSprite, cretaSprite, benzSprite, cars;
var wall, wallImage;
var start;
var deformation, weight, speed;

// var vernaWeightChange = true;
// var vernaSpeedChange = true;

var elantraWeightChange;
var elantraSpeedChange;

var cretaWeightChange;
var cretaSpeedChange;

var benzWeightChange;
var benzSpeedChange;

// var verna, elantra, creta, benz;

function preload() {
  wallImage = loadImage("wall.jpg");
}

function setup() {
  createCanvas(1600, 400);
  speed = Math.round(random(55, 90));
  weight = Math.round(random(400, 1500));
  // deformation = (0.5 * weight * (speed * 2)) / 22500;
  deformation = (0.5 * weight * speed * speed) / 22500;

  elantraWeightChange = true;
  elantraSpeedChange = true;

  cretaWeightChange = true;
  cretaSpeedChange = true;

  benzWeightChange = true;
  benzSpeedChange = true;

  cars = createGroup();

  vernaSprite = createSprite(50, 80, 50, 50);
  // vernaSprite.visible = false;

  elantraSprite = createSprite(50, 160, 50, 50);
  // elantraSprite.visible = false;

  cretaSprite = createSprite(50, 240, 50, 50);
  // cretaSprite.visible = false;

  benzSprite = createSprite(50, 320, 50, 50);
  // benzSprite.visible = false;

  cars.add(vernaSprite);
  cars.add(elantraSprite);
  cars.add(cretaSprite);
  cars.add(benzSprite);

  // vernaSprite.weight = 1913;
  // elantraSprite.weight = 2137;
  // cretaSprite.weight = 2017;
  // benzSprite.weight = 1811;

  // cars.setVelocityEach(speed, 0);

  // wall = createSprite(1500, 200, 60, height - 140);
  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeColor = (80, 80, 80)
  wall.scale = 0.45;

  // 2516
  // wall.addImage(wallImage);
  // console.log(wall.width);
  // console.log(wall.height);

  start = createSprite(800, 200, 100, 100);

  // verna = new Car();
  // verna.y = vernaSprite.y;
  // verna.weight = 1913;
  // verna.speed = random(55, 90);
  // verna.deformation = (0.5 * this.weight) * (this.speed * 2);

  // elantra = new Car();
  // elantra.y = elantraSprite.y;
  // elantra.weight = 1913;
  // elantra.speed = random(55, 90);
  // elantra.deformation = (0.5 * this.weight) * (this.speed * 2);

  // creta = new Car();
  // creta.y = cretaSprite.y;
  // creta.weight = 1913;
  // creta.speed = random(55, 90);
  // creta.deformation = (0.5 * this.weight) * (this.speed * 2);

  // benz = new Car();
  // benz.y = benzSprite.y;
  // benz.weight = 1913;
  // benz.speed = random(55, 90);
  // benz.deformation = (0.5 * this.weight) * (this.speed * 2);
}

function draw() {
  background("lightgreen");

  console.log("-------------------Speed-------------------" + speed);
  console.log("-------------------Weight-------------------" + weight);
  console.log("-------------------Deformation-------------------" + deformation);

  deformation = (0.5 * weight * speed * speed) / 22500;

  // console.log(vernaSprite.deformation);
  // deformation = (0.5 * this.weight * (speed * 2)) / 22500;
  // verna.x = vernaSprite.x;
  // verna.y = vernaSprite.x;
  // elantra.x = elantraSprite.x;
  // elantra.y = elantraSprite.x;
  // creta.x = cretaSprite.x;
  // creta.y = cretaSprite.x;
  // benz.x = benzSprite.x;
  // benz.y = benzSprite.x;

  if (mousePressedOver(start)) {
    vernaSprite.setVelocity(speed, 0);
    start.destroy();
  }

  if ((wall.x - vernaSprite.x) < (wall.width + vernaSprite.width) / 2) {
    vernaSprite.setVelocity(0, 0);
    elantraSprite.setVelocity(speed, 0);
    if (deformation < 80) {
      // vernaSprite.shapeColor = carZone[1];
      vernaSprite.shapeColor = "green";
    }
    else if (deformation > 80 && deformation < 180) {
      // vernaSprite.shapeColor = carZone[2];
      vernaSprite.shapeColor = "orange";
    }
    else if (deformation > 180) {
      // vernaSprite.shapeColor = carZone[3];
      vernaSprite.shapeColor = "red";
    }
    if (elantraSpeedChange === true) {
      speed = Math.round(random(55, 90));
      elantraSpeedChange = false;
    }
    if (elantraWeightChange === true) {
      weight = Math.round(random(400, 1500));
      elantraWeightChange = false;
    }
  }

  if ((wall.x - elantraSprite.x) < (wall.width + elantraSprite.width) / 2) {
    elantraSprite.setVelocity(0, 0);
    cretaSprite.setVelocity(speed, 0);
    if (deformation < 80) {
      // elantraSprite.shapeColor = carZone[1];
      elantraSprite.shapeColor = "green";
    }
    else if (deformation > 80 && deformation < 180) {
      // elantraSprite.shapeColor = carZone[2];
      elantraSprite.shapeColor = "orange";
    }
    else if (deformation > 180) {
      // elantraSprite.shapeColor = carZone[3];
      elantraSprite.shapeColor = "red";
    }
    if (cretaSpeedChange === true) {
      speed = Math.round(random(55, 90));
      cretaSpeedChange = false;
    }
    if (cretaWeightChange === true) {
      weight = Math.round(random(400, 1500));
      cretaWeightChange = false;
    }
  }

  if ((wall.x - cretaSprite.x) < (wall.width + cretaSprite.width) / 2) {
    cretaSprite.setVelocity(0, 0);
    benzSprite.setVelocity(speed, 0);
    if (deformation < 80) {
      // cretaSprite.shapeColor = carZone[1];
      cretaSprite.shapeColor = "green";
    }
    else if (deformation > 80 && deformation < 180) {
      // cretaSprite.shapeColor = carZone[2];
      cretaSprite.shapeColor = "orange";
    }
    else if (deformation > 180) {
      // cretaSprite.shapeColor = carZone[3];
      cretaSprite.shapeColor = "red";
    }
    if (benzSpeedChange === true) {
      speed = Math.round(random(55, 90));
      benzSpeedChange = false;
    }
    if (benzWeightChange === true) {
      weight = Math.round(random(400, 1500));
      benzSpeedChange = false;
    }
  }

  if ((wall.x - benzSprite.x) < (wall.width + benzSprite.width) / 2) {
    benzSprite.setVelocity(0, 0);
    if (deformation < 80) {
      // benzSprite.shapeColor = carZone[1];
      benzSprite.shapeColor = "green";
    }
    else if (deformation > 80 && deformation < 180) {
      // benzSprite.shapeColor = carZone[2];
      benzSprite.shapeColor = "orange";
    }
    else if (deformation > 180) {
      // benzSprite.shapeColor = carZone[3];
      benzSprite.shapeColor = "red";
    }
  }
  // cars.collide(wall);
  // verna.display();
  // elantra.display();
  // creta.display();
  // benz.display();
  drawSprites();
}
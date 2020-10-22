//later
class BlockWall {
    constructor() {
      this.x = 1500;
      this.y = 0;
      this.width = 60;
      this.height = height;
      this.centreX = this.x + (this.width / 2);
      this.centreY = this.y + (this.height / 2);
    }
    display() {
      // fill(80, 80, 80);
      fill("lightgreen");
      // rect(this.x, this.y, this.width, this.height);
      rect(this.centreX, this.centreY, this.width, this.height);
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
      this.centreX = this.x + (this.width / 2);
      this.centreY = this.y + (this.height / 2);
      this.fill = "blue";
      this.shouldMove = false;
      this.brand;
      this.carName;
    }
    display() {
      fill(this.fill);
      // rect(this.x, this.y, this.width, this.height);
      rect(this.centreX, this.ycentreY, this.width, this.height);
    }
    setDeformationValue() {
      this.deformation = (0.5 * this.weight * this.speed * this.speed) / 22500;
      console.log(this.deformation);
    }
  }
  
  // var wall;
  var start;
  var speed;
  var right, left, up, down;
  
  function setup() {
    createCanvas(1600, 400);
  
    // wall = createSprite(1500, 200, 60, height * 2);
    // wall.shapeColor = (80, 80, 80);
    // // wall.visible = false;
    // // wall.scale = 0.45;
  
    wall = new BlockWall();
  
    start = createSprite(800, 200, 100, 100);
  
    turbo = new Car();
    turbo.brand = "Porsche";
    turbo.carName = "Porsche 911 996 Turbo";
    turbo.y = 80;
    turbo.centreY = turbo.y + (turbo.height / 2);
    // turbo.weight = Math.round(random(400, 1300));//1913;
    turbo.weight = Math.round(random(400, 1300));//Exact weight of turbo in kg;
    turbo.setDeformationValue();
    //turbo.speed = speed;
  
    viper = new Car();
    viper.brand = "Dodge";
    viper.carName = "Dodge Viper";
    viper.y = 160;
    viper.centreY = viper.y + (viper.height / 2);
    viper.weight = Math.round(random(400, 1300));//2137;
    viper.setDeformationValue();
    //viper.speed = speed;
  
    gallardo = new Car();
    gallardo.brand = "Lamborghini"
    gallardo.carName = "Lamborghini Gallardo"
    gallardo.y = 240;
    gallardo.centreY = gallardo.y + (gallardo.height / 2);
    gallardo.weight = Math.round(random(400, 1300));//2017;
    gallardo.setDeformationValue();
    //gallardo.speed = speed;
  
    enzo = new Car();
    enzo.brand = "Ferrari";
    enzo.carName = "Ferrari Enzo";
    enzo.y = 320;
    enzo.centreY = enzo.y + (enzo.height / 2);
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
  
    wall.display();
    turbo.display();
    viper.display();
    gallardo.display();
    enzo.display();
  
    drawSprites();
  }
  
  function runCar(movingCar, startingCar) {
    // if ((wall.centreX - movingCar.centreX) < (wall.width + movingCar.width) / 2) {
    console.log("Car to stop: " + movingCar.carName);
    if (isTouching(movingCar, wall)) {
      console.log("----Car Touched---- ---- Touched Car's Name: " + movingCar.carName);
      movingCar.shouldMove = false;
      if (startingCar) {
        console.log("Car to start: " + startingCar.carName);
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
    // if (((target2.centreX - target1.centreX) <= (target2.width + target1.width) / 2)
    //   && (target1.centreX - (target2.centreX) <= (target2.width + target1.width) / 2)
    //   && ((target2.centre - target1.centreY) <= (target2.height + target1.height) / 2)
    //   && ((target1.centreY - target2.centreY) <= (target2.height + target1.height) / 2)) {
    if ((target2.centreX - target1.centreX) <= (target2.width + target1.width) / 2
      && (target1.centreX - (target2.centreX) <= (target2.width + target1.width) / 2)
      && ((target2.centreY - target1.centreY) <= (target2.height + target1.height) / 2)
      && ((target1.centreY - target2.centreY) <= (target2.height + target1.height) / 2)) {
      return true;
    }
  }
  
  function setVelocity(car, velocityX, velocityY) {
    car.centreX += velocityX;
    car.centreY += velocityY;
  }





















//earlier
  class BlockWall {
    constructor() {
      this.x = 1500;
      this.y = 0;
      this.width = 60;
      this.height = height;
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
  }
  
  // var wall;
  var start;
  var speed;
  var right, left, up, down;
  
  function setup() {
    createCanvas(1600, 400);
  
    // wall = createSprite(1500, 200, 60, height * 2);
    // wall.shapeColor = (80, 80, 80);
    // // wall.visible = false;
    // // wall.scale = 0.45;
  
    wall = new BlockWall();
  
    start = createSprite(800, 200, 100, 100);
  
    turbo = new Car();
    turbo.brand = "Porsche";
    turbo.carName = "Porsche 911 996 Turbo";
    turbo.y = 80;
    // turbo.weight = Math.round(random(400, 1300));//1913;
    turbo.weight = Math.round(random(400, 1300));//Exact weight of turbo in kg;
    turbo.setDeformationValue();
    //turbo.speed = speed;
  
    viper = new Car();
    viper.brand = "Dodge";
    viper.carName = "Dodge Viper";
    viper.y = 160;
    viper.weight = Math.round(random(400, 1300));//2137;
    viper.setDeformationValue();
    //viper.speed = speed;
  
    gallardo = new Car();
    gallardo.brand = "Lamborghini"
    gallardo.carName = "Lamborghini Gallardo"
    gallardo.y = 240;
    gallardo.weight = Math.round(random(400, 1300));//2017;
    gallardo.setDeformationValue();
    //gallardo.speed = speed;
  
    enzo = new Car();
    enzo.brand = "Ferrari";
    enzo.carName = "Ferrari Enzo";
    enzo.y = 320;
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
  
    turbo.display();
    viper.display();
    gallardo.display();
    enzo.display();
    wall.display();
  
    drawSprites();
  }
  
  function runCar(movingCar, startingCar) {
    // if ((wall.x - movingCar.x) < (wall.width + movingCar.width) / 2) {
    console.log("Car to stop: " + movingCar.carName);
    if (isTouching(movingCar, wall)) {
      console.log("----Car Touched---- ---- Touched Car's Name: " + movingCar.carName);
      movingCar.shouldMove = false;
      if (startingCar) {
        console.log("Car to start: " + startingCar.carName);
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
    if ((target2.x - target1.x) <= (target2.width + target1.width) / 2 
    && (target1.x - (target2.x) <= (target2.width + target1.width) / 2) 
    && ((target2.y - target1.y) <= (target2.height + target1.height) / 2) 
    && ((target1.y - target2.y) <= (target2.height + target1.height) / 2)){
      return true;
    }
  }
  
  function setVelocity(car, velocityX, velocityY) {
    car.x += velocityX;
    car.y += velocityY;
  }
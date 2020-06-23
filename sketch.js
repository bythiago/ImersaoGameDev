let sceneryImage;
let character;
let altura = 135;
let scenery;


function preload(){
  sceneryImage = loadImage('https://raw.githubusercontent.com/bythiago/ImersaoGameDev/master/assets/imagens/cenario/floresta.png');
  character = loadImage('https://raw.githubusercontent.com/bythiago/ImersaoGameDev/master/assets/imagens/personagem/correndo.png');
}

function setup() {
  scenery = new Scenery(sceneryImage, 50);
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  scenery.display();
  image(character, 0, height - altura, 110, altura, 0, 0, 220, 270);
}


class Scenery {
  constructor(image, velocity){
    this.image = image;
    this.velocity = velocity;
  }

  display(){
    image(this.image, -this.velocity, 0, width, height);
    image(this.image, width -this.velocity, 0, width, height);
  }
}

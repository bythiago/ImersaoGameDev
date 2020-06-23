let scenery;
let character;

let altura = 135;

function preload(){
  scenery = loadImage('https://raw.githubusercontent.com/bythiago/ImersaoGameDev/master/assets/imagens/cenario/floresta.png');
  character = loadImage('https://raw.githubusercontent.com/bythiago/ImersaoGameDev/master/assets/imagens/personagem/correndo.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(scenery);
  image(character, 0, height - altura, 110, altura, 0, 0, 220, 270);
}

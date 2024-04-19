//preparar e rodar um código
function setup() {
  createCanvas(800, 800); //responsável para criar uma tela com 400 de largura e 400 de altura
  background("rgb(124,17,17)");
}

//responsável pela função de desenhar na tela
function draw() {
  stroke("black");
  fill("white");
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 40, 40);
  }
}
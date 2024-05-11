function setup() {
  createCanvas(400, 400); // Cria um canvas de 400x400 pixels
  background(0); // Define o fundo como preto

  drawSkull();
}

/**
 * chama as funções que desenham a caveira
 */
function drawSkull() {
  bones();
  hat();
  face();
  hat();
  eyesAndNose();  
}

/**
 * face da caveira
 */
function face() {
  caveMouthAndJaw();
  arc(200, 200, 150, 160, 0, PI); // Desenha um arco representando o preenchimento da face
  
}


/**
 * chapéu da caveira
 */
function hat() {
  
  fill(255, 204, 0); // Define a cor de preenchimento como amarelo
  
  // exemplo de sem borda: noStroke(); // Remove o contorno 
  stroke(0); // cor da borda
  strokeWeight(1.5); // Data a largura do contorno/borda
  arc(200, 200, 150, 160, PI, TWO_PI); // Desenha um arco representando a metade superior do chapéu

  //////
  rectMode(CENTER); // Define o modo de desenho do retângulo como centralizado
  rect(200, 206, 180, 10, 20); // Desenha o retângulo deitado

  //////
  // Desenha a faixa vermelha no chapéu
  fill(255, 0, 0); // Define a cor de preenchimento como vermelho
  rect(200, 190, 150, 20, 8, 8, 0, 0); // Desenha o retângulo deitado
  
}


/**
 * desenha os olhos e o nariz da caveira
 */
function eyesAndNose() {
  fill(0);
  ellipse(170, 233, 35, 35);
  ellipse(230, 233, 35, 35);
  ellipse(200, 265, 18, 12);
}


/**
 * função que desenha os ossos por trás da cabeça da caveira
 */
function bones() {
  stroke(255); // Cor branca
  strokeWeight(25) // largura da linha(osso)

  ////// 
  line(85, 150, 295, 310); // primeiro osso
  // contornos das pontas do primeiro osso
  // cima
  ellipse(70, 150, 5, 5); 
  ellipse(85, 135, 5, 5);
  // baixo
  ellipse(315, 310, 5, 5);
  ellipse(300, 325, 5, 5);

  //////
  line(315, 150, 105,310); // segundo osso
  // contornos das pontas do segundo osso
  // cima
  ellipse(315, 135, 5, 5);
  ellipse(330, 150, 5, 5);
  //baixo
  ellipse(105, 325, 5, 5);
  ellipse(90, 310, 5, 5);
}


/**
 * essa função desenha a boca e a mandíbula da caveira
 */
function caveMouthAndJaw() {
  fill(255); // cor do preenchimento
  ellipse(200, 270, 90, 120) // queixo da caveira / circulo maior

  ellipse(200, 270, 92, 70) // parte dentária debaixo
  
  ellipse(200, 270, 90, 40) // parte dentária de cima
  
  // Linhas que formam os dentes
  line(200, 270, 200, 305); 
  line(210, 185, 175, 300);
  line(195, 200, 225, 298);  
} 
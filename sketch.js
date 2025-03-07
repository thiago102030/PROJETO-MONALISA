function setup() {
    createCanvas(400, 400);
  }
  let olhoX;
  let olhoY;
  
  function draw() {
    background("#FF9879");
    fill("#234A4F3");
    circle(200, 200, 300); // rosto
    fill("red");
    circle(150, 150, 75); // olho esquerdo
    circle(250, 150, 75); // olho direito
    line(150, 270, 250, 260); // boca
    fill("#234F51A0");
    triangle(200, 180, 170, 220, 220, 260); // nariz
    line(123, 115, 178, 100); // sobrancelha esquerda
    line(225, 116, 279, 100); // sobrancelha direita
    // circle(150,150,10); // pupila esquerda
    //circle(250,150,50); // pupila direita
  
    olhoX = map(mouseX, 0, 400, 130, 170);
    olhoY = map(mouseY, 0, 400, 130, 170);
  
    circle(olhoX, olhoY, 20); // nova pupila esquerda
    circle(olhoX + 100, olhoY, 30); //nova pupila direita
    if (mouseIsPressed) {
      console.log(mouseX, mouseY);
    }
  }
  
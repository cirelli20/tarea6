let luciernagas = [];
let t = 0;

function setup() {
  createCanvas(800, 400);
  
  // Crear un conjunto de luciérnagas
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let luciernaga = new Luciernaga(x, y);
    luciernagas.push(luciernaga);
  }
}

function draw() {
  background(20,20,0); // Fondo oscuro
  
  t += 0.01; // Incrementa el valor de tiempo para animar las luciérnagas

  // Dibujar y actualizar las luciérnagas
  for (let i = 0; i < luciernagas.length; i++) {
    luciernagas[i].mover();
    luciernagas[i].mostrar();
  }
}

class Luciernaga {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamano = random(2, 10);
    this.velX = random(0.5, 2);
    this.velY = random(0.5, 2);
    this.colorBase = color(255, 255, 0); // Amarillo
  }

  mostrar() {
    // Dibuja la luciérnaga como un círculo con degradado amarillo en el centro
    noStroke();
    for (let i = 0; i < this.tamano; i++) {
      let brillo = map(i, 0, this.tamano, 10, 55);
      fill(red(this.colorBase), green(this.colorBase), blue(this.colorBase), brillo);
      ellipse(this.x, this.y, i, i);
    }
  }

  mover() {
    // Utiliza la función noise para animar el movimiento de la luciérnaga
    this.x += map(noise(this.x * 0.01, this.y * 0.01, t), 0, 1, -this.velX, this.velX);
    this.y += map(noise(this.x * 0.01, this.y * 0.01, t + 1000), 0, 1, -this.velY, this.velY);

    // Limita las posiciones de la luciérnaga al lienzo
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
}

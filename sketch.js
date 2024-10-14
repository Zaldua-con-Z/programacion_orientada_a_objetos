let fondo;
let pelotas=[]

function setup() {
  createCanvas(windowWidth, windowHeight);
  fondo= color (random(100,255), random (50), random (250));
  for (let i= 0; i< 100; i++){
      let nuevaPelota= new Pelota();
      pelotas.push(nuevaPelota);
  }
  

}

function draw() {
  background (fondo)
  for (let i= 0; i< 100; i++){
      pelotas[i].update();
      pelotas[i].display();
   }
}

class Pelota{
  constructor(){
    this.radio = ceil(random(5,30))
    this.diametro = this.radio*2
    this.posX =random(this.radio,width-this.radio)
    this.posY =random(this.radio, height-this.radio)
    this.velX = random(-10,10)
    this.velY = random(-10,10)
    console.log()
    
  }
  update(){
    this.posX +=this.velX
    this.posY +=this.velY

    if(this.posX > width-this.radio || this.posX < this.radio){
    this.velX *= -1;
    }
    if(this.posY > height-this.radio || this.posY < this.radio){
    this.velY *=-1
    }

  

  }
  display(){
    fill(255)
    noStroke()
    circle(this.posX,this.posY,this.diametro)
  }

}
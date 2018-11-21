var x,y,z

function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight)
}

function draw() {
  noStroke()
  for(i=0;i<width/10;i++){
    for(h=0;h<height/10;h++){
      fill(rotationX/i*3,rotationY/h*3,0)
      rect(i*width/10,h*height/10,width/10,height/10)
      

    }
  }

}

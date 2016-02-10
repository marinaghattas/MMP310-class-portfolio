var img;
function preload() {
createCanvas(windowWidth,windowHeight);
  img = loadImage('images/image1.jpg');
}

function setup() {
    image(img,0,0,200,100);
}
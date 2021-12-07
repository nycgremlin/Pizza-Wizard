var diam1=0;
var diam2=0;

function setup() {
  // put setup code here
  createCanvas(500,500);
}

function mousePressed() {
    if (diam1>=250){
  		diam1=0;
  	}else{diam1=diam1+10;
  	}
  }
    if (diam2>=200){
    diam1=0;
    }else{diam2=diam1-10}

function draw() {
  // put drawing code here
background("#11A100");

//pizza base
  fill("#D10000");
  stroke("#F0B23D");
  strokeWeight(10);
  ellipse(250,250,diam1,diam1);

//cheese
  fill("#FBE9AF");
  noStroke(0)
  ellipse(250,250,diam1-35,diam1-35);

//pepperoni cursor
  stroke("#D10000");
  strokeWeight(8);
  line (mouseX,mouseY,mouseX+20,mouseY+20);
   

  fill("#F98CA2");
  stroke("#AB0000");
  strokeWeight(2);
  ellipse(mouseX,mouseY,20,20);


  
//text
textSize(32);
noStroke();
fill(255, 255, 255);
textAlign(250,0);
text('You are the Pizza Wizard!',20,75);

textSize(32);
noStroke();
textAlign(250,500);
fill(255, 255, 255);
text('Use your Pepperoni Wand!', 20,440);
}
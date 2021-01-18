
var mr;
var fr;

function setup() {
  createCanvas(800,400);

  mr=createSprite(400, 200, 50, 50);
  mr.shapeColor="green";
  mr.debug=true;

  fr=createSprite(300, 100, 50, 50);
  fr.shapeColor="green";
  fr.debug=true;

  o1=createSprite(100, 200, 50, 50);
  o1.shapeColor="green";
  o1.debug=true;
  o1.velocityX=5

  o2=createSprite(500, 200, 50, 50);
  o2.shapeColor="green";
  o2.debug=true;
  o2.velocityX=-5
}

function draw() {
  background(255,255,255); 
  
  mr.x=mouseX;
  mr.y=mouseY;

  if(mr.x-fr.x<mr.width/2+fr.width/2 && fr.x-mr.x<mr.width/2+fr.width/2 && mr.y-fr.y<mr.height/2+fr.height/2 && fr.y-mr.y<mr.height/2+fr.height/2){
    mr.shapeColor="red";
    fr.shapeColor="red";
  }
   
  else{
    mr.shapeColor="green";
    fr.shapeColor="green";
  }
  
  if(o1.x-o2.x<o1.width/2+o2.width/2 && o2.x-o1.x<o1.width/2+o2.width/2){
    //mr.velocityX*=(-1)
    o1.velocityX=o1.velocityX*(-1)
    o2.velocityX=o2.velocityX*(-1)
  }

  drawSprites();
}
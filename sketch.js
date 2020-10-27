var gameObject1;
var gameObject2;
var gameObject3;
var gameObject4;


var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(500, 200, 100, 50);
  fixedRect.shapeColor="red";
  //fixedRect.debug = true;

  
  movingRect = createSprite(200, 200, 50, 100); 
  movingRect.shapeColor="red";
 // movingRect.debug = true;

gameObject1=createSprite(100,100,50,50)
gameObject1.shapeColor="yellow"

gameObject2=createSprite(200,100,50,50)
gameObject2.shapeColor="yellow"

gameObject3=createSprite(300,100,50,50)
gameObject3.shapeColor="yellow"

gameObject4=createSprite(400,100,50,50)
gameObject4.shapeColor="yellow"

}

function draw() {
  background(145,254,222);  

//console.log(fixedRect.x - movingRect.x);
movingRect.x=mouseX;
movingRect.y=mouseY;
  
if (isTouching(movingRect,gameObject3)){
movingRect.shapeColor="blue"

gameObject3.shapeColor="blue"

}

else{

  movingRect.shapeColor="red"

  gameObject3.shapeColor="yellow"
   
}











  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}

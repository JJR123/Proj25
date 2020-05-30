class Dustbin extends BaseClass{ 
  constructor(x,y,width,height){ 
    super(x,y,150,150); 
    this.image = loadImage("Sprites/dustbingreen.png"); 
 
    
 } 


display(){
 var pos =this.body.position;
rectMode(CENTER); 
strokeWeight(1); 
stroke((127,127,127)); 
var rect1=rect(628, 620,10,150); 
var rect2=rect(700,690,150,10); 
var rect3=rect(772,620,10,150); 

super.display();
}
}    
      

      
      
      
   
 
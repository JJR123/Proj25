class Paper extends BaseClass{ 
    constructor(x,y,width,height){ 
       super(x,y,45,45); 
       this.image = loadImage("Sprites/paper.png"); 

    } 

  
display(){
    var pos =this.body.position;
  rectMode(CENTER); 
  strokeWeight(1); 
  stroke((127,127,127))
  //rect(pos.x, pos.y, this.width, this.height); 
  super.display();
  }
}  


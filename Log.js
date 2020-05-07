class Log extends BaseClass{
  constructor(x,y,width,height){
    var options = {
      isStatic: true
  }
    super(x,y,width,height,options);
    
    
    
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    }
  
}
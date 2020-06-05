class Box extends BaseClass {
  constructor(x, y, width, height){
    var options = {  
      restitution :0.0,
      friction :4,
  }
    super(x,y,width,height,options);
      this.Visibility = 255
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<8){
      super.display();
   } else {
     World.remove(world,this.body)
      push();
      this.Visibility = this.Visibility - 2
      tint(255,this.Visibility)
      rect(0,0, this.width, this.height);
      pop();
    }
  }
    Score(){
    if(this.Visibility<0 && this.Visibility>-105){
    score++
    }
  }
   
 };
  
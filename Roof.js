class Roof{
    constructor(x, y, width,height) {
        var options = {
            
            'friction':1.0,
            'density':2.0,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, width,height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        
        var pos = this.body.position;
        push();
        stroke(4);
        strokeWeight("black")

        fill("grey")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
      
        pop();
      }
}

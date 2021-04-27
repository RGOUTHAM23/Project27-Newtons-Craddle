class Chain{
    constructor(body1, body2,xOffset) {
      this.xOffset = xOffset;
        var options = {
            bodyA : body1,
            bodyB: body2,
            pointB :{x:this.xOffset,y:0},
            
        }
        this.chain = Constraint.create(options);
        
        
        World.add(world, this.chain);
      }
      display(){
        stroke("black");
        strokeWeight(3);
        var pos = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        line(pos.x,pos.y,posB.x+this.xOffset,posB.y);

      }
}

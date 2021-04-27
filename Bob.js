class Bob{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.5,
            
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        
        
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;

        push();
        stroke("black");
        strokeWeight(4);
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
      }
}
class Slingshoot{
    constructor(bodyA, bodyB){
     var options = {
      bodyA:bodyA,
      bodyB:bodyB,
      stiffness:0.04,
      length:10,
     } 
        this.Slingshoot = Constraint.create(options);
        World.add(world,this.Slingshoot);
    
    }
    display(){
        var pointA = this.Slingshoot.bodyA.position;
        var pointB = this.Slingshoot.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }


}
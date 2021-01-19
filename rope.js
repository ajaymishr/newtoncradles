class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.5,
            length:210
        }
        this.chain=Matter.Constraint.create(options);
    World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        stroke("blue");
  strokeWeight(6);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
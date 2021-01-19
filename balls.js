class ball{
    constructor(x,y){
        var options = {
            'restitution':1.2,
            'friction':1.0,
            'density':2.0,
        }
    this.body=Bodies.circle(x,y,25,options)
    World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(this.body.position.x,this.body.position.y,25)
    }
}
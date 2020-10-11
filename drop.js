class Drop {
    constructor(x,y) {
        this.body = Bodies.circle(x,y,10);
        World.add(world, this.body);
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,10,10)
    
    }
}
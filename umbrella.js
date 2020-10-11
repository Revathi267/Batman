class Umbrella {
    constructor(x,y) {
        this.body = Bodies.circle(x,y,50);
        this.image = loadImage("manumb.png")
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50)
    
    }
}
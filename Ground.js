class Ground {
    constructor(){
        var options = {
            isStatic: true
        }

        this.ground = Bodies.rectangle(400,668,795,15,options);
        World.add(world,this.ground);
    }
    display(){
        stroke("white");
        fill("white");
        rectMode(CENTER);
        rect(400,668,795,15);
    }
}
class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic: true
        }
        this.width=w;
        this.height=h;
    this.ground=Bodies.rectangle(x,y,w,h, options);
World.add(world,this.ground);


    }
    
    display()
    {
    var pos= this.ground.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }

}
class   Roof{
    constructor(x,y){
        var options={
           isStatic:true
        }
        this.body=Bodies.rectangle(x,y,200,15,options);
        this.width=200;
        this.height=15;
        World.add(world,this.body)

    }
    display(){
        var pos =this.body.position;
        fill(255);
        stroke(10);
      rectMode(CENTER);
      rect(pos.x, pos.y, 200,15);

    }
}
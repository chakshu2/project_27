class Bob{
    constructor(x,y){
        var options={
        restitution:0.3,
        friction:0.5,
        density:1.2   ,
        isStatic:true 
        }
        this.body=Bodies.circle(x,y,40,options)
        this.radius=40;
        World.add(world,this.body)

    }
    display(){
var pos=this.body.position;
fill("red");
ellipseMode(CENTER)
ellipse(pos.x,pos.y,40,40);
   
}
}
class SlingShot {
    constructor(bodyX,pointB){
        var option ={
            bodyA:bodyX,
            pointB :pointB,
            stiffness:0.04,
            lenght:10
            
        }
        this.rope =Constraint.create (option)
        this.pointB=pointB
        World.add(world,this.rope)
    }
    fly(){
       this.rope.bodyA=null 
    }
    display() {
        if (this.rope.bodyA){
     var pointA= this.rope.bodyA.position
     var pointB=this.pointB
     strokeWeight(4);
     line(pointA.x,pointA.y,pointB.x,pointB.y)

    }
    }    
}

class Dustbin {
    constructor(x,y){
        this.x = x
        this.y = y
        this.bottomBody = Bodies.rectangle(this.x,this.y,200,20,{isStatic:true});
        this.leftBody = Bodies.rectangle(this.x-100,this.y-50,20,100,{isStatic:true});
        this.rightBody = Bodies.rectangle(this.x+100,this.y-50,20,100,{isStatic:true});
        Matter.Body.setAngle(this.leftBody,0)
        Matter.Body.setAngle(this.rightBody,0)
      World.add(world,this.bottomBody)
      World.add(world,this.rightBody)
      World.add(world,this.leftBody)
    }
display(){
    var pos1 = this.bottomBody.position
    var pos2 = this.leftBody.position
    var pos3 = this.rightBody.position

    push();
    translate(pos2.x,pos2.y);
    rectMode(CENTER);
    angleMode(RADIANS)
    strokeWeight(5)
    fill("pink")
    rotate(0);
    rect(0,0,20,100)
    pop();

    push();
    translate(pos3.x,pos3.y);
    rectMode(CENTER);
    angleMode(RADIANS)
    strokeWeight(5)
    fill("pink")
    rotate(0);
    rect(0,0,20,100)
    pop();

    push();
    translate(pos1.x,pos1.y);
    rectMode(CENTER);
    angleMode(RADIANS)
    strokeWeight(5)
    fill("pink")
    rect(0,0,200,20)
    pop();
}
}
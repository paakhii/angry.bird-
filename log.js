class log{
    constructor(x,y,h, angle){
          var options = {
                restitution: 0.8, density: 1, friction: 0.3
          }
          this.body= Bodies.rectangle (x,y,20,h, options)
          this.width = 20
          this.height = h
         this.angle= angle
          Matter.Body.setAngle(this.body, this.angle)
          World.add(world,this.body)
    }

    display(){
         var pos = this.body.position 
         var angle = this.body.angle
         push()
         translate (pos.x,pos.y)
         rotate(angle)
         rectMode(CENTER)
         strokeWeight(3)
         stroke("white")
         fill("red")
         rect(0,0, this.width,this.height )
         pop()
    }
}
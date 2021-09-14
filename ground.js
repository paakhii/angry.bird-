class ground{
      constructor(){
            var options = {
                  isStatic: true
            }
            this.body= Bodies.rectangle (600,400,1200,20, options)
            World.add(world,this.body)
      }

      display(){
           var pos = this.body.position 
           fill("brown")
           rectMode(CENTER)
           rect(pos.x, pos.y, 1200,20 )
      }
}
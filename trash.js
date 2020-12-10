class Trash {
    constructor(x,y) {
      this.x = x
      this.y = y
      this.trashWidth = 200
      this.trashHeight = 213
      this.wallThickness = 20;

      this.image=loadImage("dustbingreen.png")
      this.bottomBody=Bodies.rectangle(this.x, this.y, this.trashWidth, this.wallThickness, {isStatic:true})
      this.leftWallBody=Bodies.rectangle(this.x-this.trashWidth/2, this.y-this.trashHeight/2, this.wallThickness, this.trashHeight, {isStatic:true})
      this.rightWallBody=Bodies.rectangle(this.x+this.trashWidth/2, this.y-this.trashHeight/2, this.wallThickness, this.trashHeight, {isStatic:true})
  
      World.add(world, this.bottomBody);
      World.add(world, this.leftWallBody);  
      World.add(world, this.rightWallBody);
    }
    display(){
      var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
      var posRight=this.rightWallBody.position;
      
      push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
      pop()
      
      push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
      pop()
      
      push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.trashHeight/2,this.trashWidth, this.trashHeight)
			pop()
    }
  };
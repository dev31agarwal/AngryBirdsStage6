class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    
    this.image = loadImage("sprites/bird.png");
    this.image2=loadImage("sprites/smoke.png")
    this.trajectory= [];
  }

  display() {
    if(this.body.position.x>200&&this.body.speed>30){
    var position = [this.body.position.x, this.body.position.y];
    this.trajectory.push(position);
    }
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    for(var i=0; i<this.trajectory.length;i=i+1 ){
      push()
      imageMode(CENTER);
      image(this.image2, this.trajectory[i][0],this.trajectory[i][1])
      pop();
    }
    super.display();
  }
}

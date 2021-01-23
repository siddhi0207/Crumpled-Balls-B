class Paper
{
   constructor(x,y,r)
   {
       var options=
       {
           isStatic:false,
           resitution:0.3,
           friction:0.8,
           density:2
       }
       this.x = x;
       this.y = y;
       this.r = r/2;
       this.body = Bodies.circle(x,y,r/2,options)
       this.image = loadImage("paper.png")
       World.add(world,this.body);
   }
   display()
   {
       var pos = this.body.position;

       push();
       translate(pos.x,pos.y);
       //strokeWeight(3);
       //fill(255,0,255);
       //ellipseMode(RADIUS);
       //ellipse(p)
       imageMode(CENTER);
       image(this.image, 0,0,40,40);
       pop();
   }
}
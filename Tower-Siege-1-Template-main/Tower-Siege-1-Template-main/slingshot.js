class slingshot {

    constructor(bodyA, pointB) {
  
      var option = {
  
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.05,
          length:10
   
       }
       
       this.pointB = pointB
  
       this.sling = Constraint.create(option);
  
       World.add(world,this.sling)
  
    }
  
    display(){
  
     if (this.sling.bodyA){
  
  
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB
  
  
      strokeWeight(10)
      push();
      stroke(48,22,8)
      if (pointA.x<210){
  
        line(pointA.x+30,pointA.y,pointB.x-10,pointB.y)
        line(pointA.x-30,pointA.y,pointB.x-50,pointB.y-10) 
  
      }
      else{
   
      line(pointA.x+20,pointA.y,pointB.x,pointB.y)
      line(pointA.x+20,pointA.y,pointB.x-50,pointB.y-10)

      }
      pop();
  
    }
  
    }
    fly(){
  
     this.sling.bodyA = null
  
    }
    
  }
  
  
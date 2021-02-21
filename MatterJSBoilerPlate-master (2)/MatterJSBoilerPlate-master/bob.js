class bob{
    constructor(x,y){
        var options ={
            
            restitution :1,
            friction :0,
            density :7.8
            
        }
        this.body = Bodies.circle(x,y,25,options);
        this.width = 100;
    
        World.add(world, this.body);
    }
    display(){
    
        push();
        ellipseMode(RADIUS);
        fill(254);
        ellipse(this.body.position.x,this.body.position.y,25,25);
        pop();
        
    }
    
    }

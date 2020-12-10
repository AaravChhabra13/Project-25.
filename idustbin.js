class invisibledustbin{
    constructor(){

        var opt={
            isStatic:true,
            friction:0.5,
            density:1.2
        }

        this.leftbody=Bodies.rectangle(1245,710,10,120,opt);
        World.add(world,this.leftbody);

        this.rightbody=Bodies.rectangle(1355,710,10,120,opt);
        World.add(world,this.rightbody);
     }

     display(){
         var pos=this.leftbody.position;
         var pos2=this.rightbody.position;

         rectMode(CENTER);
         fill("brown");
         rect(pos.x,pos.y,10,100);

         rectMode(CENTER);
         fill("brown");
         rect(pos2.x,pos2.y,10,100);

     }
}
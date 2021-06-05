class Polygon {
    constructor(x, y){
        this.image("polygon.png");
        polygon = Bodies.circle(50, 200, 20);
        World.add(world, this.body);

        slingShot = new SlingShot(this.polygon,{x:100, y:200});

    }
    

    display(){
        this.display();
        ImageMode(CENTER);
        image(polygon_img ,polygon.position.x, polygon.position.y, 40, 40);
    }
}
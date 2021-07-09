class CannonBall {
  constructor(x, y, radius) {
    var bodyOptions = {
      restitution: 0.8,
      friction: 1,
      density: 1,
      isStatic: true,
    };

    this.cannonBallImg = loadImage("./assets/cannonball.png");
    this.radius = radius;
    this.body = Bodies.circle(x, y, this.radius, bodyOptions);
    World.add(world, this.body);
  }

  show() {
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.cannonBallImg, 0, 0, this.radius, this.radius);
    pop();
  }

  setVel() {
    Body.setStatic(this.body, false);
    var velocityVector = p5.Vector.fromAngle(cannon.angle);
    // Vector * force  To give good speed to cannon balls
    velocityVector.mult(20);
    Body.setVelocity(this.body, { x: velocityVector.x, y: velocityVector.y });
    console.log("Called!");
  }
}

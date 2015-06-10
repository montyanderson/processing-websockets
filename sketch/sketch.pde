import de.voidplus.redis.*;

PShape object;
Redis redis;

int pointX, pointY, pointZ;
int x = 0, y = 0, z = 0;

public void setup() {
  size(640, 360, OPENGL);
    
  object = loadShape("rocket.obj");
  redis = new Redis(this, "localhost", 6379);
  
  pointX = width / 2;
  pointY = height / 2;
  pointZ = -400;
}



public void draw() {
  background(0);
  lights();
  
  x = Integer.parseInt(redis.get("rotateX"));
  y = Integer.parseInt(redis.get("rotateY"));
  z = Integer.parseInt(redis.get("rotateZ"));
  
  translate(pointX, pointY, pointZ);
  rotateX(x);
  rotateY(y);
  rotateZ(z);
  shape(object);
}

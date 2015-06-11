import de.voidplus.redis.*;

PShape object;
Redis redis;

int pointX, pointY, pointZ;
float radiansX, radiansY, radiansZ;

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
  
  radiansX = radians(Integer.parseInt(redis.get("rotateX")));
  radiansY = radians(Integer.parseInt(redis.get("rotateY")));
  radiansZ = radians(Integer.parseInt(redis.get("rotateZ")));
  
  translate(pointX, pointY, pointZ);
  rotateX(radiansX);
  rotateY(radiansY);
  rotateZ(radiansZ);
  shape(object);
}

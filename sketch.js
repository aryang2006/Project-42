var iss, issImg, bg;
var sc, sc1, sc2, sc3, sc4;
var hasDocked = false;

function preload() {
  issImg = loadImage("iss.png")
  sc1 = loadImage("spacecraft1.png")
  sc2 = loadImage("spacecraft2.png")
  sc3 = loadImage("spacecraft3.png")
  sc4 = loadImage("spacecraft4.png")
  bg = loadImage("spacebg.jpg")
}

function setup() {
  createCanvas(800,400);

  iss = createSprite(400, 150);
  iss.addImage(issImg)
  iss.scale = 0.5

  sc = createSprite(random(100,700), 300)
  sc.addImage(sc1)
  sc.scale = 0.2

}

function draw() {
  background(bg); 
  sc.depth = iss.depth
  sc.depth = sc.depth-1
  
  if (hasDocked === false) {
    if ((sc.x >= 360 && sc.x <= 370) && (sc.y >= 220 && sc.y <= 230)) {
      text("Docking Successful!", 350, 200)
      sc.x = 365
      sc.y = 225
      sc.visible = false
      iss.visible = false
    }
    if (keyDown(RIGHT_ARROW)) {
      sc.addImage(sc4)
      sc.x = sc.x + 2
    }
    else if (keyDown(LEFT_ARROW)) {
      sc.addImage(sc3)
      sc.x = sc.x - 2
    }
    else if (keyDown(UP_ARROW)) {
      sc.addImage(sc2)
      sc.y = sc.y - 2
    }
    else if (keyDown(DOWN_ARROW)) {
      sc.addImage(sc1)
      sc.y = sc.y + 2
    }
    else {
      sc.addImage(sc1)
    }

  drawSprites();
}
}
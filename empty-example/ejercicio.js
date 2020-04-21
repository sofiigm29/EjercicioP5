let rSlider, gSlider, bSlider;


function setup() {
  // create canvas
  createCanvas(1090, 800);
  background(104, 166, 160);
  noStroke();
  
  

  // create sliders
  rSlider = createSlider(0, 255, 202);
  rSlider.position(20, 660);
  gSlider = createSlider(0, 255, 180);
  gSlider.position(20, 700);
  bSlider = createSlider(0, 255, 217);
  bSlider.position(20, 740);


  rSlider2 = createSlider(0, 255, 228);
  rSlider2.position(420, 660);
  gSlider2 = createSlider(0, 255, 206);
  gSlider2.position(420, 700);
  bSlider2 = createSlider(0, 255, 242);
  bSlider2.position(420, 740);

  rSlider3 = createSlider(0, 255, 242);
  rSlider3.position(820, 660);
  gSlider3 = createSlider(0, 255, 196);
  gSlider3.position(820, 700);
  bSlider3 = createSlider(0, 255, 213);
  bSlider3.position(820, 740);

 

  
}

function draw() {

  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();

  const r2 = rSlider2.value();
  const g2 = gSlider2.value();
  const b2 = bSlider2.value();

  const r3 = rSlider3.value();
  const g3 = gSlider3.value();
  const b3 = bSlider3.value();
 


  push();
  translate(350, 150);
  fill(r, g, b);
  rect(0, 0, 400, 400);
  fill(r2,g2,b2);
  rect(40, 40, 320, 320);
  fill(r3,g3,b3);
  rect(75, 75, 250, 250);
  pop();


  textSize(20);
   fill(242, 25, 5);
  text('RED', rSlider.x * 2 + rSlider.width, 675);
   fill(126, 217, 61);
  text('GREEN', gSlider.x * 2 + gSlider.width, 715);
   fill( 5, 84, 242);
  text('BLUE', bSlider.x * 2 + bSlider.width, 755);

textSize(20);
   fill(242, 25, 5);
  text('RED', rSlider2.x * 1.05 + rSlider.width, 675);
   fill(126, 217, 61);
  text('GREEN', gSlider2.x * 1.05 + gSlider.width, 715);
   fill( 5, 84, 242);
  text('BLUE', bSlider2.x * 1.05 + bSlider.width, 755);


  textSize(20);
   fill(242, 25, 5);
  text('RED', rSlider3.x * 1.02 + rSlider.width, 675);
   fill(126, 217, 61);
  text('GREEN', gSlider3.x * 1.02 + gSlider.width, 715);
   fill( 5, 84, 242);
  text('BLUE', bSlider3.x * 1.02 + bSlider.width, 755);
  
}

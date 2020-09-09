/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
 var x = 100;
 var y = 100;
 var dx = 20;
 var dy = 20;
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
    
  // stel vulkleur in
  fill(100, 100, 255);
background('blue');
  // teken een cirkel
  
  ellipse(x,y,80,80);
 
x += dx;
y += dy;

if(x >= 1240 || x <= 40){
    dx = -dx;
}

if(y >=680 || y <= 40){
    dy = -dy;
}
  //bewegen
 
}

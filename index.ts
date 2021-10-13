// CSS Styles importieren; kann gelöscht werden falls nicht benötigt
import './style.css';

// Wir laden p5js
import p5 = require('p5');
import { drawCircle } from './circle';

// Wir informieren p5js, welche Funktionen unser Programm bereitstellt.
// Mit TypeScript und p5js verwendet man am besten den "instance mode"
// statt dem "global mode" (https://p5js.org/reference/#/p5/p5).
// Man kann die Funktionen entfernen, die man in der jeweiligen Übung
// nicht braucht (z.B. kein Reagieren auf Tastatur -> `keyPressed` weg).
export let p: p5;
new p5((p5: p5) => {
  p = p5;
  p.preload = preload;
  p.setup = setup;

  p.draw = draw;
  p.keyPressed = keyPressed;
  p.mousePressed = mousePressed;
});

function preload() {
  // Diese Funktion wird vor `setup` aufgerufen. Wir verwenden sie,
  // um z.B. Bilder zu laden.
  // https://p5js.org/reference/#/p5/preload
}

function setup() {
  // Diese Funktion wird einmal beim Programmstart aufgerufen.
  // https://p5js.org/reference/#/p5/setup
  p.createCanvas(600, 600);
}

function keyPressed() {
  // Diese Funktion wird aufgerufen, wenn eine Taste gedrückt wird.
  // https://p5js.org/reference/#/p5/keyPressed
  console.log(`Key ${p.keyCode} has been pressed`);
}

function mousePressed() {
  // Diese Funktion wird aufgerufen, wenn die Mause geklickt wird.
  // https://p5js.org/reference/#/p5/mousePressed
  console.log(`Mouse was pressed at ${p.mouseX}/${p.mouseY}`);
}

function draw() {
  // Diese Funktion wird aufgerufen, wenn der Bildschirm aktualisiert
  // werden muss.
  // https://p5js.org/reference/#/p5/draw
  p.background('blue');

  p.stroke('brown');
  p.fill('brown');

  p.push();
  p.translate(0, 100, 0);

  p.circle(50, 500, 300);
  p.circle(320, 500, 450);
  p.circle(450, 500, 450);

  p.pop();
}

// CSS Styles importieren; kann gelöscht werden falls nicht benötigt
import './style.css';

// Wir laden p5js
import p5 = require('p5');
import { preload as tanksPreload, getTank } from './tanks';
import { preload as weaponPreload, getWeapon } from './weapons';
import { backgroundMusic, preload as soundPreload } from './sounds';

const tankSize1: number = 50;
const tankSize2: number = 75;

let posTank1: { x: number; y: number } = { x: 50, y: 410 };
let posTank2: { x: number; y: number } = { x: 420, y: 300 };

interface IBullet {
  x: number;
  y: number;
  width: number;
  height: number;
  speedX: number;
  speedY: number;
}

const bullets: IBullet[] = [];

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
  soundPreload();
  weaponPreload();
  tanksPreload();
}

function setup() {
  // Diese Funktion wird einmal beim Programmstart aufgerufen.
  // https://p5js.org/reference/#/p5/setup
  p.createCanvas(600, 600);

  backgroundMusic.play();
}

function keyPressed() {
  console.log(`Key ${p.keyCode} has been pressed`);

  // start bullet from tank 1
  if (p.keyIsDown(32)) {
    // SPACE
    bullets.push({
      x: posTank1.x + 30,
      y: posTank1.y - 10,
      width: 10,
      height: 10,
      speedX: 0.5,
      speedY: -0.75,
    });
  }

  // start bullet from tank 2
  if (p.keyIsDown(13)) {
    // ENTER
    bullets.push({
      x: posTank2.x + 30,
      y: posTank2.y - 10,
      width: 10,
      height: 10,
      speedX: -0.75,
      speedY: -1,
    });
  }
}

function mousePressed() {
  console.log(`Mouse was pressed at ${p.mouseX}/${p.mouseY}`);
}

function draw() {
  p.background('blue');

  p.stroke('brown');
  p.fill('brown');

  p.circle(50, 600, 300);
  p.circle(320, 600, 450);
  p.circle(450, 600, 450);

  // tank1 movement
  if (p.keyIsDown(p.LEFT_ARROW)) {
    posTank1.x -= 1;
  } else if (p.keyIsDown(p.RIGHT_ARROW)) {
    posTank1.x += 1;
  }

  // tank2 movement
  if (p.keyIsDown(65)) {
    posTank2.x -= 1;
  } else if (p.keyIsDown(68)) {
    posTank2.x += 1;
  }

  // draw tanks
  p.image(getTank(0), posTank1.x, posTank1.y, tankSize1, tankSize1);
  p.image(getTank(1), posTank2.x, posTank2.y, tankSize2, tankSize2);

  // draw bullets
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].x += bullets[i].speedX;
    bullets[i].y += bullets[i].speedY;

    p.image(getWeapon(0), bullets[i].x, bullets[i].y);
  }
}

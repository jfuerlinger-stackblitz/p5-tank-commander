import p5 = require('p5');
import { p } from './index';

const weaponNames = [
  'https://satankcommander.blob.core.windows.net/assets/tank_bullet6.png',
];

const images: p5.Image[] = [];

export function preload() {
  for (const weaponName of weaponNames) {
    images.push(p.loadImage(weaponName));
  }
}

export function getWeapon(nr: number): p5.Image {
  return images[nr];
}

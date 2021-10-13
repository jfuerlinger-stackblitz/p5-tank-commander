import p5 = require('p5');
import { p } from './index';

const tankNames = [
  'https://satankcommander.blob.core.windows.net/assets/tanks_tankGreen1.png',
  'https://satankcommander.blob.core.windows.net/assets/tanks_tankGreen4.png',
];

const images: p5.Image[] = [];

export function preload() {
  for (const tankName of tankNames) {
    images.push(p.loadImage(tankName));
  }
}

export function getTank(nr: number): p5.Image {
  return images[nr];
}

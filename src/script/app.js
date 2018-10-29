import '@babel/polyfill';
import $ from 'jquery';
import * as PIXI from 'pixi.js';

console.log(22 ** (3 * 2));

$(() => {
  const app = new PIXI();
  console.log(app);
});

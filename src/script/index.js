import $ from 'jquery';
import modernizr from 'modernizr';

$(() => {
  Promise.resolve().finally();
  console.log('gns green');
  modernizr.on('webp', (res) => {
    console.log(res);
  });
});

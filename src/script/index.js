import $ from 'jquery';

$(() => {
  Promise.resolve().finally();
  console.log('gns green');
});

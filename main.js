// setup canvas
const canvas = document.querySelector('myCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.fillRect(50, 50, 100, 150);
ctx.fillStyle = 'rgb(255, 0, 255, 0.75)';
ctx.fillRect(25, 100, 165, 30);
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.strokeStyle = 'rgb(255, 255, 255)';
ctx.strokeRect = (50, 50, 100, 150);
ctx.lineWidth = 5;
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.beginPath();
ctx.moveTo(40,40);
ctx.lineTo(140, 40);
const triHight = 40 * Math.tan(degToRad(60));
ctx.lineTo(100, 40 + triHight);
ctx.lineTo(40, 40);
ctx.fill();
ctx.

function degToRad(degrees) {
  return degrees * Math.PI / 180;
}
// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
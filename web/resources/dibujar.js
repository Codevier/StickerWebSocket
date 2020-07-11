/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var canvas = document.getElementById("board");
    var ctx = canvas.getContext("2d");
    var cw = canvas.width = 300,
    cx = cw / 2;
    var ch = canvas.height = 300,
    cy = ch / 2;
    var dibujar = false;
    ctx.lineJoin = "round";

canvas.addEventListener('mousedown', function(evt) {
    dibujar = true;
    ctx.clearRect(0, 0, cw, ch);
    ctx.beginPath();

}, false);

canvas.addEventListener('mouseup', function(evt) {
  dibujar = false;

}, false);

canvas.addEventListener("mouseout", function(evt) {
  dibujar = false;
}, false);

canvas.addEventListener("mousemove", function(evt) {
  if (dibujar) {
    var m = oMousePos(canvas, evt);
    ctx.lineTo(m.x, m.y);
    ctx.stroke();
  }
}, false);

function oMousePos(canvas, evt) {
  var ClientRect = canvas.getBoundingClientRect();
  return { //objeto
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top)
  }
}


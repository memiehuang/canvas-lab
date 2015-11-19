/*
    Script for index.html

    See the README.md file for instructions
    https://github.com/drstearns/canvas-lab/blob/master/README.md
*/

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    var canvas = document.getElementById("canvas");
    var input = document.getElementById("line-color-inp");
    var ctx = canvas.getContext('2d');
    var mouseDown = false;

    ctx.lineWidth = 30;

    canvas.addEventListener('mousedown', function(mouse){
        mouseDown = true;
        ctx.beginPath();
        ctx.moveTo(mouse.clientX - canvas.offsetLeft, mouse.clientY - canvas.offsetTop);
    });

    canvas.addEventListener('mousemove', function(mouse){
        if(mouseDown){
            ctx.lineTo(mouse.clientX - canvas.offsetLeft, mouse.clientY - canvas.offsetTop);
            ctx.stroke();
        }
    });

    canvas.addEventListener('mouseup', function(mouse){
        ctx.lineTo(mouse.clientX - canvas.offsetLeft, mouse.clientY - canvas.offsetTop);
        ctx.stroke();
        mouseDown = false;
    });

    input.addEventListener('change', function(){
       ctx.strokeStyle = document.getElementById('line-color-inp').value;
    });

}); //DOMContentLoaded

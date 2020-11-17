'use strict';
import {Canvas} from './nmlCanvas.js';
import {Shape} from './nmlShape1.js';

/*
 * nmlCanvas77.js
 */
let room;

let initialize = function () {
    room = new Canvas('room', 'transparent');
    room.canvas.addEventListener('click', hittest);
    console.log(room.context)

    let toolbox = new Canvas('toolbox', 'transparent');
    toolbox.canvas.addEventListener('click', hittest);
    console.log(toolbox.context)

    // create objects
    // put in array
    let shape1 = new Shape(toolbox, 10, 10, 120, 40, 'rgba(21,129,238,1)', "rect");
    let shape2 = new Shape(toolbox, 10, 60, 80, 60, 'rgba(21,182,32,1)', "rect");
    let shape3 = new Shape(toolbox, 10, 130, 200, 50, 'rgba(216,26,26,1)', "rect");
    let shape4 = new Shape(toolbox, 10, 190, 80, 80, 'rgba(216,110,18,1)', "rect");

    //let shape5 = new Shape(toolbox, 200, 190, 80, 80, 'black', "semicircle");


    shapes.push(shape1);
    shapes.push(shape2);
    shapes.push(shape3);
    shapes.push(shape4);
    //shapes.push(shape5);

    repeater(toolbox, shapes);
}

let roomShapes = [];
let activeRoomShapes = [];
let selectedShape;


let hittest = function (ev) {
    console.log(this.id)

    var mousePos = getMousePos(event.target, ev);
    console.log(mousePos.x + ',' + mousePos.y);
    console.log(event.target)

    for (let shape of shapes) {
        let cx = shape.ctx;
        cx.beginPath();
        cx.rect(shape.x, shape.y, shape.width, shape.height);
        cx.closePath();
        let bb = this.getBoundingClientRect();    // canvas size and pos
        // mouse to canvas coordinates
        let x = (ev.clientX - bb.left) * (this.width / bb.width);
        let y = (ev.clientY - bb.top) * (this.height / bb.height);





        if (cx.isPointInPath(x, y)) {
        console.log("sda")

        roomShapes.push(shape);
        selectedShape = shape;

        let currentStyle = cx.fillStyle;
        //console.log(currentStyle)
        cx.fillStyle = "black";
        cx.fill();


        shapes.splice(shapes.indexOf(event.target));
        console.log(roomShapes)
/*
        let cordinatesArr = [];
        cordinatesArr.push(shape.x);
        cordinatesArr.push(shape.y);
        cordinatesArr.push(shape.width);
        cordinatesArr.push(shape.height);
        cordinatesArr.push(shape);
        console.log(cordinatesArr[4].x)
        moveShapes(shape.x, shape.y)
*/

        }




    }


    if (event.target.id == "room") {

      var mousePos = getMousePos(event.target, ev);
      console.log(mousePos.x + ',' + mousePos.y);

        //&repeater(event.target, roomShapes);
        for (var i = 0; i < roomShapes.length; i++) {
          let shape1 = new Shape(room, mousePos.x, mousePos.y, selectedShape.width, selectedShape.height, selectedShape.color, "rect");

          activeRoomShapes.push(shape1);
          console.log(activeRoomShapes)
          //console.log(room.context)
          repeater(room, activeRoomShapes);

        }

    }


}

function getMousePos(canvas, ev) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: ev.clientX - rect.left,
        y: ev.clientY - rect.top
    };
}




let redraw = function (cv, arr) {
    cv.clear();
    cv.prep();
    // loop through array and draw
    for (let shape of arr) {
        shape.draw();
    }
}

let repeater = function (cv, arr) {
    // if this is an animation build a setInterval loop here
    // if not, just draw
    redraw(cv, arr);
}








let shapes = [];

window.addEventListener('load', initialize);

const $ = function (foo) {
    return document.getElementById(foo);    // save keystrokes
}

let canvasNode = document.querySelectorAll("canvas")
var canvasArr = Array.prototype.slice.call(canvasNode);


class Canvas {
    constructor(canvasId, color) {
        this.canvas = $(canvasId);
        this.context = this.canvas.getContext("2d");
        this.color = color;
        this.prep();
    }
    prep() {
        this.context.fillStyle = this.color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    getContext() {
        return this.context;
    }
    getHeight() {
        return this.canvas.height;
    }
    getWidth() {
        return this.canvas.width;
    }
};







console.log(canvasArr)

let initialize = function () {
    let room = new Canvas('myCanvas', 'transparent');
    room.canvas.addEventListener('click', hittest);
    // create objects
    // put in array
    let shape1 = new Shape(room, 20, 10, 120, 40, 'blue');
    let shape2 = new Shape(room, 200, 100, 80, 60, 'green');
    shapes.push(shape1);
    shapes.push(shape2);
    repeater(room, shapes);

    let toolbox = new Canvas('myCanvas', 'transparent');


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

let hittest = function (ev) {
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
            cx.fillStyle = (cx.fillStyle === "#ffff00") ? "green" : "yellow";
            cx.fill();
            shape.color = cx.fillStyle;
            // window.alert("hit: "+x+","+y);
        } else {
            // window.alert("nohit: "+x+","+y);
        }
        // console.log(shape);
    }
}

let shapes = [];

window.addEventListener('load', initialize);


window.addEventListener('load', shapes);

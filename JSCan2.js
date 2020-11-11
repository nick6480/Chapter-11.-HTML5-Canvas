const $ = function (foo) {
    return document.getElementById(foo);    // save keystrokes
}

let roomWidth = 200;
let roomHeight = 200;

class Canvas {
    constructor(room) {
        this.canvas = $(room);
        //this.context = this.canvas.getContext("2d");
    }
}


function roomCreate() {
  let room = new Canvas('myCanvas0');
  room.width = roomWidth;
  room.height = roomHeight;
  room.fillStyle = "black";
  
  if (room.getContext) {
      var ctx = room.getContext('2d');
  }
}


roomCreate();

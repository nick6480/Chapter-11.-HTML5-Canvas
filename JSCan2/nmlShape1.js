'use strict';

/**
 * Shape object, with added move method
 */
export class Shape {
    constructor(cv, x, y, width, height, color, type) {
        if (type == "rect") {
          this.ctx = cv.context;
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
          this.color = color;

      } else if (type == "semicircle") {
          this.ctx = cv.context;
          this.ctx.beginPath();
          this.ctx.arc(x, y, width, 0, Math.PI, false);
          this.ctx.closePath();
          this.ctx.lineWidth = 5;
          this.color = color;
          this.ctx.fill();

        }

    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
};

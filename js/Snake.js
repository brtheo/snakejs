import Vector2 from "./Vector2.js"
export default class Snake {
    constructor (context, cell,  x, y, color) {
        this.ctx = context
        this.cell = cell
        this.pos = new Vector2(x*this.cell,y*this.cell)
        this.vel = new Vector2()
        this.color = color
        this.tailLength = 3

    }
    draw () {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.pos.x, this.pos.y, this.cell, this.cell)
    }
    update () {
        this.pos.move(this.pos.x+this.vel.x*this.cell,
                    this.pos.y + this.vel.y * this.cell)

    }
}
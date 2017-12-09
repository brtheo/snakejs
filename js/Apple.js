import Entity from './Entity.js'
import Vector2 from "./Vector2.js"
export default class Apple extends Entity {
    constructor(context, cell, color) {
        super(context, cell)

        this.pos.move(Math.floor(Math.random() * this.cell)*this.cell,
                      Math.floor(Math.random() * this.cell)*this.cell)
        this.color = color
    }
    draw () {
        this.ctx.beginPath()
        this.ctx.arc(this.pos.x+(this.cell/2), 
                    this.pos.y+(this.cell/2), 
                    this.cell/2, 0, 360)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
  
    }
}
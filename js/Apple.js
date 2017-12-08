import Vector2 from "./Vector2.js"
export default class Apple {
    constructor(context, cell, color) {
        this.ctx = context
        this.cell = cell 
        this.pos = new Vector2(
            Math.round(Math.random() * this.cell)*this.cell,
            Math.round(Math.random() * this.cell)*this.cell
        )
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
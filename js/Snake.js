import Vector2 from "./Vector2.js"
export default class Snake {
    constructor (context, cell,  x, y, color) {
        this.ctx = context
        this.cell = cell
        this.pos = new Vector2(x*this.cell,y*this.cell)
        this.vel = new Vector2()
        this.color = color
        this.tailLength = 3
        this.tail = []

    }
    draw () {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.pos.x, this.pos.y, this.cell, this.cell)
        this.tail.forEach(t => {
                this.ctx.fillStyle = this.color
                this.ctx.fillRect(t.x, t.y, this.cell, this.cell)
        })
        while(this.tail.length < this.tailLength){
            this.tail.push({x:this.pos.x,y: this.pos.y})
        }
        console.log(this.pos.x, this.pos.y)
        console.table(this.tail)
        this.tail.shift()

    }
    update () {
        this.pos.move(this.pos.x+this.vel.x*this.cell,
                    this.pos.y + this.vel.y * this.cell)
        
        if(this.pos.x < 0) this.pos.x = this.cell*this.cell
        if(this.pos.x > this.cell*this.cell) this.pos.x = 0
        if(this.pos.y < 0) this.pos.y = this.cell*this.cell
        if(this.pos.y > this.cell*this.cell) this.pos.y = 0
        
    }
}
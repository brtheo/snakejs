import Entity from './Entity.js'
import Vector2 from "./Vector2.js"
export default class Snake extends Entity {
    constructor (context, cell,  x, y, color) {
        super(context, cell, x, y)

        this.vel = new Vector2()
        this.color = color
        this.tailLength = 15
        this.tail = []
        this.exp = 0

    }
    draw () {
        this.ctx.beginPath()
        this.ctx.arc(this.pos.x+(this.cell/2), 
                    this.pos.y+(this.cell/2), 
                    this.cell/2-1, 0, 360)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        /*this.ctx.fillRect(this.pos.x+1, this.pos.y+1, this.cell-2, this.cell-2)*/
        this.tail.forEach((t, i) => {
                this.ctx.beginPath()
                this.ctx.arc(t.x+(this.cell/2), 
                            t.y+(this.cell/2), 
                            this.cell/2-(i%3*2), 0, 360)
                this.ctx.fillStyle = this.color
                this.ctx.fill()
               /* this.ctx.fillStyle = this.color
                this.ctx.fillRect(t.x+(i%3), 
                                    t.y+(i%3), 
                                    this.cell-(i%3*2), 
                                    this.cell-(i%3*2))*/
        })
        while(this.tail.length < this.tailLength){
            this.tail.push(new Vector2(this.pos.x,this.pos.y))
        }
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
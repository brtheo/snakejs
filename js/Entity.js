import Vector2 from "./Vector2.js"
export default class Entity {
    constructor (context, cell, x=0, y=0) {
        this.ctx = context
        this.cell = cell
        this.pos = new Vector2(x * this.cell ,y * this.cell)
    }
}
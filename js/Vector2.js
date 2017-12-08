export default class Vector2 {
    constructor (x=0,y=0 ){
        this.move(x,y)
    }
    move (x,y) {
        this.x = x
        this.y = y
    }
    collide (vec) {
        return this.x === vec.x &&
                this.y === vec.y
    }
}



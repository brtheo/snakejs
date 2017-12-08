import Snake from './Snake.js'
import Apple from './Apple.js'
let canvas = document.querySelector("#game")
let context = canvas.getContext("2d")



let cell = Math.sqrt(canvas.height)
console.log(cell)

let snake = new Snake(context, cell, 5, 5, "#8BC34A")
let apple = new Apple(context, cell, "#B71C1C")

setInterval(update, 60)
document.addEventListener("keypress", keyboardInput)

function draw() {
    context.fillStyle = "#212121"
    context.fillRect(0,0, 400, 400)
    snake.draw()
    apple.draw()
}
function update() { 
    draw()
    snake.update()
}

function keyboardInput(e) {
    switch(e.key) {
        case "z":
            snake.vel.move(0,-1)
        break
        case "q":
            snake.vel.move(-1,0)
        break
        case "s":
            snake.vel.move(0,1)
        break
        case "d":
            snake.vel.move(1,0)
        break

    }
}


import { Player } from "./player.mjs"

const score = 0

const canvas = document.getElementById("app")
const ctx = canvas.getContext("2d")

const player = new Player(canvas)
const handleKeyInput = (event) => {
    switch (event.key) {
        case "a":
            player.moveLeft()
            break
        case "d":
            player.moveRight()
            break
        case "w":
            player.moveUp()
            break
        case "s":
            player.moveDown()
            break
        default:
            break
    }
}
window.addEventListener("keypress", handleKeyInput)


const updateScore = async () => {
    const scoreBoard = document.getElementById('score')
    scoreBoard.textContent = score
}

const render = () => {
    // Update Score
    updateScore()


    // Clear Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Render Everything Asynchronously
    player.render()

}


setInterval(render, 10)

import { ComputerFishManager } from "./computer.mjs"
import { Player } from "./player.mjs"

let score = 0

const canvas = document.getElementById("app")
const ctx = canvas.getContext("2d")

let interval = undefined
let moveFishInterval = undefined

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

const fishManager = new ComputerFishManager(canvas)

const updateScore = (points) => {
    score += points
    const scoreBoard = document.getElementById('score')
    scoreBoard.textContent = score
}

/** A player has lost. */
const showFinal = () => {
    clearInterval(interval)
    clearInterval(moveFishInterval)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = '30px Arial'
    ctx.fillText(`Your fish got eaten. Refresh page to play again.`, 10, 50)
}

const render = async () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    player.render()
    fishManager.render()
    fishManager.checkCollisions(player, showFinal, updateScore)
}


interval = setInterval(render, 10)
moveFishInterval = setInterval(() => fishManager.moveFishes(), 250)
updateScore(0)

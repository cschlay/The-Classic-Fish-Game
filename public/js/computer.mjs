import { Fish } from "./fish.mjs"

class ComputerFishManager {
    constructor(canvas) {
        this.fishes = {}
        this.fishesGenereted = 0

        for (let fishCount = 0; fishCount < 10; fishCount++) {
            this.fishes[this.fishesGenereted] = new Fish(canvas)
            this.fishesGenereted += 1
        }
    }

    async render() {
        Object.keys(this.fishes).forEach(fishIndex => this.fishes[fishIndex].render())
    }

    checkCollisions(player, onPlayerEaten, onFishEaten) {
        Object.keys(this.fishes).forEach(fishIndex => {
            const fish = this.fishes[fishIndex]
            // If fish is bigger.
            if (fish.width > player.width && fish.height > player.height &&
                fish.x - 10 <= player.x && fish.x + fish.width + 10 >= player.x + player.width &&
                fish.y - 10 <= player.y && fish.y + fish.height + 10 >= player.y + player.height) {
                onPlayerEaten()
            }
            // If player is bigger.
            else if (player.width > fish.width && player.height > fish.height &&
                player.x - 10 <= fish.x && player.x + player.width + 10 >= fish.x + fish.width &&
                player.y - 10 <= fish.y && player.y + player.height + 10 >= fish.y + fish.height) {
                delete this.fishes[fishIndex]
                onFishEaten(1) // Add points here.
            }
        })
    }
}


export { ComputerFishManager }

/** TODO: Inherit Fish class. */
class Player {
    constructor(canvas) {
        this.x = 10
        this.y = 10
        this.width = 60
        this.height = 25
        this.speed = 5

        // Fish Proportions

        this.canvas = canvas
    }

    /** Draw the fish. */
    async render() {
        const ctx = this.canvas.getContext("2d")

        ctx.beginPath()

        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x + this.width, this.y)
        ctx.lineTo(this.x + this.width, this.y + this.height)
        ctx.lineTo(this.x, this.y + this.height)
        ctx.lineTo(this.x, this.y)

        ctx.strokeStyle = "#ad1da1"
        ctx.stroke()
    }

    growFish() {
        this.width += 10
        this.height += 5
    }

    moveLeft() {
        if (this.x > 0) {
            this.x -= this.speed
        }
    }

    moveRight() {
        if (this.x + this.width < this.canvas.width) {
            this.x += this.speed
        }
    }

    moveUp() {
        if (this.y > 0) {
            this.y -= this.speed
        }

    }

    moveDown() {
        if (this.y + this.height < this.canvas.height) {
            this.y += this.speed
        }
    }
}

export { Player }
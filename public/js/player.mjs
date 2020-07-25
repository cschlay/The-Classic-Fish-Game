class Player {
    constructor(canvas) {
        this.x = 10
        this.y = 10
        this.fishWidth = 60
        this.fishHeight = 25
        this.speed = 1

        // Fish Proportions

        this.canvas = canvas
    }

    /** Draw the fish. */
    async render() {
        const ctx = this.canvas.getContext("2d")

        ctx.beginPath()

        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x + this.fishWidth, this.y)
        ctx.lineTo(this.x + this.fishWidth, this.y + this.fishHeight)
        ctx.lineTo(this.x, this.y + this.fishHeight)
        ctx.lineTo(this.x, this.y)

        ctx.stroke()
    }

    moveLeft() {
        if (this.x > 0) {
            this.x -= this.speed
        }
    }

    moveRight() {
        if (this.x + this.fishWidth < this.canvas.width) {
            this.x += this.speed
        }
    }

    moveUp() {
        if (this.y > 0) {
            this.y -= this.speed
        }

    }

    moveDown() {
        if (this.y + this.fishHeight < this.canvas.height) {
            this.y += this.speed
        }
    }
}

export { Player }
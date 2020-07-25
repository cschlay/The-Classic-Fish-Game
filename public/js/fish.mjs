class Fish {
    constructor(canvas) {
        this.canvas = canvas

        this.x = Math.floor(Math.random() * canvas.width)
        this.y = Math.floor(Math.random() * canvas.height)
        this.width = Math.floor(Math.random() * 80 + 20)
        this.height = Math.floor(0.4 * this.width)

        // Speed is proptional to its width.
        this.speed = this.width % 50
    }

    async render() {
        const ctx = this.canvas.getContext("2d")
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x + this.width, this.y)
        ctx.lineTo(this.x + this.width, this.y + this.height)
        ctx.lineTo(this.x, this.y + this.height)
        ctx.lineTo(this.x, this.y)

        ctx.strokeStyle = "#000000"
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

export { Fish }
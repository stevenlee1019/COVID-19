import '../favicon.ico'
import '../image.png'
import '../icon-192.png'
import '../icon-512.png'
import '../css/style.scss'

const canvas =  document.querySelector('canvas')
const context = canvas.getContext('2d')
canvas.width = 1600
canvas.height = 900

class Ball {
    constructor() {
        this.r = Math.random() * 20 + 20
        this.x = Math.random() * (canvas.width - 2 * this.r) + this.r
        this.y = Math.random() * (canvas.height - 2 * this.r) + this.r
        this.speed = Math.random() * 5 + 5
        
        const rotation = Math.random() * Math.PI * 2
        this.vx = this.speed * Math.cos(rotation)
        this.vy = this.speed * Math.sin(rotation)
    }

    move() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < this.r || this.x > canvas.width - r) 
            this.vx *= -1
        if (this.y < this.r || this.y > canvas.height - r) 
            this.vy *= -1
    }

    drawCircle() {
        context.fillStyle = `rgb(0, 
            ${Math.random() * 255},
            ${Math.random() * 255})`
          this.color = this.originalColor
        context.beginPath()
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        context.fill()
    }
}

const ball = new Ball()
ball.drawCircle() 

let r = 20 , numBalls = 10, balls = []

for (let i=0; i<numBalls; i++) {
    balls.push(new Ball())
}

function update() {
    for (const ball of balls) {
      ball.move()
    }
  }

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    for (const ball of balls) {
      ball.drawCircle()
    }
}

function loop() {
    update()
    render()
    requestAnimationFrame(loop)
  }
  
  loop()



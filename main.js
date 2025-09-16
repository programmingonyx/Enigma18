let canvas = document.getElementById('myCanva')
let play = document.querySelector('.play')
ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = 410

var friction = 0.99
var gravity = 1
var colorArray = ['red','#fff','#0953FF']
function circle(x,y,dy,radius,color) {
  this.x = x 
  this.y = y
  this.radius = radius 
  this.dy = dy
  this.color = color
  
  this.draw = function() {
    ctx.beginPath()
    ctx.arc(this.x,this.y,radius,0,Math.PI*2)
    ctx.fillStyle = this.color
    ctx.fill()
  }
  
  this.update = function() {
    if (this.y + this.radius > canvas.height) {
      this.dy = -this.dy * friction
    }
    else{
      this.dy += gravity
    }
  this.y += this.dy
  this.draw()
  }
}
var ball
var ballArray = []
for (var i = 0; i < 100; i++) {
  var x = Math.floor(Math.random()*canvas.width)
  var radius  = Math.floor(Math.random() * 30)
  var y = Math.floor(Math.random()*canvas.height)
  var color = colorArray[Math.floor(Math.random() * colorArray.length)]
  ballArray.push(new circle(x,y,2,radius,color))
}
function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0,0,canvas.width,canvas.height)
  for (var i = 0; i < ballArray.length; i++) {
    ballArray[i].update()
  }
}
animate()
 const container = document.querySelector('.heart-container');
 function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // random size
    const size = Math.random() * 20 + 15;
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    // random horizontal position
    heart.style.left = Math.random() * 100 + "vw";

    // random duration
    const duration = Math.random() * 5 + 5;
    heart.style.animationDuration = duration + "s";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }

  setInterval(createHeart, 500);
window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  
  music.play().catch(() => {
    // If autoplay fails, wait for user click
    document.body.addEventListener("click", () => {
      if (music.paused) {
        music.play();
      } else {
        music.pause();
      }
    });
  });
});
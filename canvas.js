

const canvas = document.getElementById("canvas");
canvas.height = 300
canvas.width = 1000

const ctx = canvas.getContext('2d');

ctx.font = "bold 80px Arial"
ctx.textAlign = 'center'
ctx.textBaseline = 'top'


let gravity = .05
let speed = 0.03
class Letter{
    constructor({letter, position_x, positionY}){
        this.letter = letter
        this.positionY = positionY
        this.position_x = position_x
        this.width = 70,
        this.height = 90
        this.volacity_x = (this.position_x + this.width) * speed
        this.volacity_y = (this.positionY + this.height) * speed
    }

    draw(){

        ctx.fillStyle = 'rgb(102, 20, 38)'
        ctx.fillText(this.letter,this.position_x,this.positionY)
        ctx.fillText(this.letter,this.position_x+2,this.positionY+2)
        ctx.fillText(this.letter,this.position_x+4,this.positionY+4)
        ctx.fillText(this.letter,this.position_x+6,this.positionY+6)
        ctx.fillText(this.letter,this.position_x+8,this.positionY+8)
        
        ctx.fillStyle = '#ddd'
        ctx.fillText(this.letter,this.position_x+8,this.positionY+8)
    }

    update(){
        this.draw()
        // console.log(this.volacity_x, this.volacity_y)
        if(this.positionY + this.height <= canvas.height){
          // console.log('pass')
          this.volacity_y += gravity
        }else{
          // this.positionY += this.volacity_y
          this.volacity_x = 0
          this.volacity_y = 0
        }

        this.positionY += this.volacity_y
        this.position_x += this.volacity_x
    }
}

let theName = 'ACHRAF MOREAU'
theName = theName.split("")


const allletters = theName.map((elm, index)=>{
    const letter = new Letter({
        letter: elm,
        position_x: index * 25,
        positionY: 20,
        volacity_x: 0,
        volacity_y: 0
    })
    return letter
})


let draggedLetter = null;
canvas.addEventListener('mousedown', info=>{

  const mouseX = info.clientX - canvas.getBoundingClientRect().left;
  const mouseY = info.clientY - canvas.getBoundingClientRect().top;

  allletters.forEach((letter) => {
    if (
      mouseX > letter.position_x &&
      mouseX < letter.position_x + letter.width &&
      mouseY > letter.positionY &&
      mouseY < letter.positionY + letter.height
    ) {
      draggedLetter = letter;
    }
  });

})

let friction = .8
let spring = .5
canvas.addEventListener('mousemove', (event) => {
  if (draggedLetter) {
    draggedLetter.position_x = event.clientX - canvas.getBoundingClientRect().left - draggedLetter.width / 2;
    draggedLetter.positionY = event.clientY - canvas.getBoundingClientRect().top - draggedLetter.height / 2;
    
    
  }
});

canvas.addEventListener('mouseup', () => {
  if(draggedLetter) {
    draggedLetter.volacity = 5
  }
  draggedLetter = null;

  
});









//the loop for animation --------------
function loop(){
    window.requestAnimationFrame(loop)
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    allletters.forEach(elm =>{
        elm.update()
    })
}
loop()
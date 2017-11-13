document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('canvas');
    // let canvas = document.querySelector('canvas')
    canvas.width = 500;
    canvas.height = 500;
    // canvas.style.backgroundColor = 'red'
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'violet';
    ctx.fillRect(0,0,500,500);
                // x,y,width, height
    // const - for variables that you will never need to reassign
    // let is for variables that you might reassign

    let gradient = ctx.createLinearGradient(50,0,500,500)
    gradient.addColorStop(0, 'violet');
    // asking the gradient to have one of the sides start with violet
    gradient.addColorStop(1, 'blue');
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,500,500);
    
    ctx.beginPath(); 
    ctx.rect(50,50,400,400)
    ctx.strokeStyle = 'purple'
    ctx.lineWidth = 5;
    ctx.stroke()

    ctx.beginPath()
    ctx.ellipse(300, 300, 300, 75, 45 * Math.PI/180, 0, 2 * Math.PI)
    // ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
    ctx.strokeStyle = 'black'
    ctx.stroke()



})
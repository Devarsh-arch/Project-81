canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
color = "red"
ctx.beginPath()
ctx.strokeStyle = color
ctx.lineWidht = 5
ctx.arc(459, 293, 30, 0, 2*Math.PI)
ctx.stroke()
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e){
    mouse_x = e.clientX - canvas.offsetLeft
    mouse_y = e.clientY - canvas.offsetTop
    circle(mouse_x, mouse_y)
}
function circle(){
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidht = 5
    ctx.arc(459, 293, 30, 0, 2*Math.PI)
    ctx.stroke()
}
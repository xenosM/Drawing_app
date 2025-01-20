const canvas = document.querySelector("canvas");
canvas.height = innerHeight-canvas.offsetTop;
canvas.width = innerWidth;

const ctx = canvas.getContext("2d");

ctx.lineWidth =1;
//*mousedown
canvas.addEventListener("mousedown", handleMouseDown);
//*event function
function handleMouseDown(e){
    let x =e.offsetX;
    let y =e.offsetY;
    ctx.beginPath();
    ctx.moveTo(x, y);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
}
function handleMouseMove(e){
    let x = e.offsetX;
    let y = e.offsetY;
  ctx.lineTo(x, y);
  ctx.stroke();
  
}
function handleMouseUp(){
    canvas.removeEventListener("mousemove", handleMouseMove);
    canvas.removeEventListener("mouseup",handleMouseUp)
}
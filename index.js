/*
document.addEventListener("mousemove", function(event) {
  const mouseX = event.clientX
  const mouseY = event.clientY
  console.log("Mouse position:", mouseX, mouseY)
})
either that or*/

// function to attribute color depending on mouse movement
let mousePosition = (event) => {

  //assign variable to x and y position of the mouse
  const mouseX = event.clientX
  const mouseY = event.clientY

  //define gradient color for the background of the top and bottom wings
  const topGradient = `linear-gradient(rgb(${mouseX},${mouseY},${(mouseX + mouseY)/10}), rgb(${(mouseX + mouseY)/10},${mouseY},${mouseX}))`
  const botGradient = `linear-gradient(rgb(${(mouseX + mouseY)/10},${mouseY},${mouseX}),rgb(${mouseX},${mouseY},${(mouseX + mouseY)/10}))`

  // create array of the top wings and assign color
  const topWings = document.querySelectorAll(".wing-top")
  topWings[0].style.background = topGradient
  topWings[1].style.background = topGradient

  // create array of the bottom wings and assign color
  const botWings = document.querySelectorAll(".wing-bottom")
  botWings[0].style.background = botGradient
  botWings[1].style.background = botGradient
}


document.addEventListener("mousemove", mousePosition);

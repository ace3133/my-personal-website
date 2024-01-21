const h2 = document.createElement("h2");
h2.textContent = "What does it means to have Sabr?";
document.querySelector("body").appendChild(h2);

function showAlert() {
    alert("You clicked the image!")
}
function moveDodgerLeft() {
    var dodger = document.getElementById('dodger');
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    var dodger = document.getElementById('dodger');
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  document.addEventListener("keydown", function (event) {
    // Get the current position of the dodger
    const leftNumbers = dodger.style.left.replace("px", "");
    const topNumbers = dodger.style.top.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    let top = parseInt(topNumbers, 10);
  
    // Define the amount by which to move the dodger
    const moveAmount = 10; // You can adjust this value
  
    // Handle different arrow keys
    switch (event.key) {
      case "ArrowLeft":
        // Move left
        dodger.style.left = `${left - moveAmount}px`;
        break;
      case "ArrowRight":
        // Move right
        dodger.style.left = `${left + moveAmount}px`;
        break;
      case "ArrowUp":
        // Move up
        dodger.style.top = `${top - moveAmount}px`;
        break;
      case "ArrowDown":
        // Move down
        dodger.style.top = `${top + moveAmount}px`;
        break;
    }
  });
  
  
  
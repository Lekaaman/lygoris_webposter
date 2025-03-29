document.addEventListener("DOMContentLoaded", function () {
    const whiteRectangle = document.querySelector(".white-rectangle");

    let currentRectangle = null;
    let currentFlower = null;
    let currentText = null;  // Track the current text element in the white rectangle

    // Add event listener to rectangle images
    document.querySelectorAll(".rect-img").forEach(rect => {
        rect.addEventListener("click", function () {
            // If a rectangle already exists, remove it
            if (currentRectangle) {
                currentRectangle.remove();
            }

            // Create new rectangle image that will take 100% of the white rectangle
            let newRect = document.createElement("img");
            newRect.src = this.src;
            newRect.classList.add("visible");
            newRect.style.width = "100%"; // Make rectangle take 100% width
            newRect.style.height = "100%"; // Make rectangle take 100% height
            newRect.style.objectFit = "cover"; // Ensure the image covers the white rectangle

            // Append the new rectangle image to the white rectangle
            whiteRectangle.appendChild(newRect);

            // Store reference to the new rectangle
            currentRectangle = newRect;
        });
    });

    // Add event listener to small flower images
    document.querySelectorAll(".smallflower").forEach(flower => {
        flower.addEventListener("click", function () {
            // If a flower already exists, remove it
            if (currentFlower) {
                currentFlower.remove();
            }

            let newFlower = document.createElement("img");
            newFlower.src = this.src;
            newFlower.classList.add("smallflower-added");

            // Position the flower on the right side of the white rectangle
            newFlower.style.position = "absolute";
            newFlower.style.left = "60%"; // Position it on the right side
            newFlower.style.top = "50%"; // Vertically center it
            newFlower.style.transform = "translateY(0%) scale(3.5) rotate(0deg)"; // 1.5x size and 45-degree rotation

            // Append the new flower image to the white rectangle
            whiteRectangle.appendChild(newFlower);

            // Store reference to the new flower
            currentFlower = newFlower;
        });
    });

    // Add event listener to text items
    document.querySelectorAll(".text-item").forEach(textItem => {
        textItem.addEventListener("click", function () {
            // If a text already exists, remove it
            if (currentText) {
                currentText.remove();
            }

            // Create a new div to hold the text
            let newText = document.createElement("div");
            newText.classList.add("added-text");
            newText.innerHTML = this.innerHTML;  // Use the clicked text's HTML
            // Position the text within the white rectangle
            newText.style.position = "absolute";
            newText.style.left = "5%"; // Add some left padding
            newText.style.top = "15%"; // Vertically center it
            newText.style.transform = "translateY(-50%)"; // Center it perfectly

            // Append the new text element to the white rectangle
            whiteRectangle.appendChild(newText);

            // Store reference to the new text
            currentText = newText;
        });
    });

    // Signature Canvas Logic
    const canvas = document.getElementById('drawCanvas');
    const ctx = canvas.getContext('2d');
    const customCursor = document.getElementById('customCursor');

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    // Set the stroke style to red (for signature-like effect)
    ctx.strokeStyle = '#00000';  // Red color for the signature
    ctx.lineWidth = 2;  // Set the thickness of the line
    ctx.lineJoin = 'round';  // Rounded line joins
    ctx.lineCap = 'round';  // Rounded line ends

    // Show custom cursor and handle mouse movements
    canvas.addEventListener('mousemove', function (e) {
        const rect = canvas.getBoundingClientRect(); 
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;

        customCursor.style.display = 'block';
        customCursor.style.left = `${e.clientX}px`; 
        customCursor.style.top = `${e.clientY}px`;
    });

    // Hide the custom cursor when the mouse leaves the canvas
    canvas.addEventListener('mouseleave', function () {
        customCursor.style.display = 'none';
    });

    // Start drawing when mouse button is pressed
    canvas.addEventListener('mousedown', function (e) {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY]; 
    });

    // Draw on canvas while mouse is moving and drawing is active
    canvas.addEventListener('mousemove', function (e) {
        if (isDrawing) {
            const x = e.offsetX;
            const y = e.offsetY;

            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.closePath();

            [lastX, lastY] = [x, y];
        }
    });

    // Stop drawing when mouse button is released
    canvas.addEventListener('mouseup', function () {
        isDrawing = false;
    });

    // Also stop drawing if the mouse leaves the canvas
    canvas.addEventListener('mouseleave', function () {
        isDrawing = false;
    });
});

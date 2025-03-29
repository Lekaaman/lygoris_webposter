document.addEventListener("DOMContentLoaded", function () {
    const whiteRectangle = document.querySelector(".white-rectangle");

    let currentRectangle = null;
    let currentFlower = null;
    let currentText = null;  

   
    document.querySelectorAll(".rect-img").forEach(rect => {
        rect.addEventListener("click", function () {
            
            if (currentRectangle) {
                currentRectangle.remove();
            }

            
            let newRect = document.createElement("img");
            newRect.src = this.src;
            newRect.classList.add("visible");
            newRect.style.width = "100%"; 
            newRect.style.height = "100%"; 
            newRect.style.objectFit = "cover"; 

            
            whiteRectangle.appendChild(newRect);

           
            currentRectangle = newRect;
        });
    });

    
    document.querySelectorAll(".smallflower").forEach(flower => {
        flower.addEventListener("click", function () {
           
            if (currentFlower) {
                currentFlower.remove();
            }

            let newFlower = document.createElement("img");
            newFlower.src = this.src;
            newFlower.classList.add("smallflower-added");

            
            newFlower.style.position = "absolute";
            newFlower.style.left = "60%"; 
            newFlower.style.top = "50%"; 
            newFlower.style.transform = "translateY(0%) scale(3.5) rotate(0deg)"; 

            
            whiteRectangle.appendChild(newFlower);

            
            currentFlower = newFlower;
        });
    });

    
    document.querySelectorAll(".text-item").forEach(textItem => {
        textItem.addEventListener("click", function () {
            
            if (currentText) {
                currentText.remove();
            }

            
            let newText = document.createElement("div");
            newText.classList.add("added-text");
            newText.innerHTML = this.innerHTML;  
            newText.style.position = "absolute";
            newText.style.left = "5%"; 
            newText.style.top = "15%"; 
            newText.style.transform = "translateY(-50%)"; 
            whiteRectangle.appendChild(newText);
            currentText = newText;
        });
    });


    const canvas = document.getElementById('drawCanvas');
    const ctx = canvas.getContext('2d');
    const customCursor = document.getElementById('customCursor');

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

   
    ctx.strokeStyle = '#00000';  
    ctx.lineWidth = 2;  
    ctx.lineJoin = 'round';  
    ctx.lineCap = 'round';  

    
    canvas.addEventListener('mousemove', function (e) {
        const rect = canvas.getBoundingClientRect(); 
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;

        customCursor.style.display = 'block';
        customCursor.style.left = `${e.clientX}px`; 
        customCursor.style.top = `${e.clientY}px`;
    });

  
    canvas.addEventListener('mouseleave', function () {
        customCursor.style.display = 'none';
    });

    
    canvas.addEventListener('mousedown', function (e) {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY]; 
    });

    
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

  
    canvas.addEventListener('mouseup', function () {
        isDrawing = false;
    });

    
    canvas.addEventListener('mouseleave', function () {
        isDrawing = false;
    });
});

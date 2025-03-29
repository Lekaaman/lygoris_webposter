// document.addEventListener('DOMContentLoaded', function () {
//     const rectImages = document.querySelectorAll('.rect-img');
//     const whiteRectangle = document.querySelector('.white-rectangle');

//     rectImages.forEach((image) => {
//         image.addEventListener('click', function () {
//             // Remove existing image
//             const existingImage = whiteRectangle.querySelector('img');
//             if (existingImage) {
//                 existingImage.remove();
//             }

//             // Create a new image element
//             const newImage = document.createElement('img');
//             newImage.src = image.src;
//             newImage.alt = image.alt;
//             newImage.classList.add('visible'); 

//             // Ensure full coverage of the white rectangle
//             newImage.style.width = "100%";
//             newImage.style.height = "100%";
//             newImage.style.objectFit = "cover"; 

//             // Append the new image
//             whiteRectangle.appendChild(newImage);
//         });
//     });
// });

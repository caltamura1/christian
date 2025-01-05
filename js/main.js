// function updateArrows() {
//     arrowLeft.style.display = scrollContainer.scrollLeft <= 0 ? 'none' : 'block';
//     // Maximum scroll position: scrollWidth (entire content) - clientWidth (visible part)
//     arrowRight.style.display = 
//       scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth)
//       ? 'none'
//       : 'block';
//   }
  
//   // Update arrow visibility on each scroll event
//   scrollContainer.addEventListener('scroll', updateArrows);
//   // Run once on load
//   updateArrows();

// document.addEventListener('DOMContentLoaded', function() {
//     const modal = document.getElementById('image-modal');
//     const modalImg = document.getElementById('modal-img');
//     const captionText = document.getElementById('modal-caption');
//     const closeBtn = document.getElementById('close-btn');
    
//     // Grab all images in the gallery
//     const images = document.querySelectorAll('.gallery-image');
    
//     images.forEach(img => {
//       img.addEventListener('click', () => {
//         // Set the modal image source to the clicked image
//         modal.style.display = 'block';
//         modalImg.src = img.src.replace('-thumbnail', ''); // If using a naming convention
//         captionText.innerText = img.alt; // Use the alt text as caption
//       });
//     });
    
//     // Close modal on clicking the close button or modal background
//     closeBtn.addEventListener('click', () => {
//       modal.style.display = 'none';
//     });
  
//     // Optional: close modal by clicking anywhere outside the image
//     modal.addEventListener('click', (e) => {
//       if (e.target === modal) {
//         modal.style.display = 'none';
//       }
//     });
//   });
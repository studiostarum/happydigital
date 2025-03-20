import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export const initLightbox = () => {
  // Get all images in the course body
  const images = document.querySelectorAll('.course_body img');

  // Add click event listener to each image
  images.forEach((img) => {
    img.style.cursor = 'pointer'; // Add pointer cursor to indicate clickability
    
    // Check if image is already wrapped in a link
    if (!img.closest('a')) {
      img.addEventListener('click', () => {
        // Define escape key handler first
        const handleEscape = (e) => {
          if (e.key === 'Escape') {
            instance.close();
          }
        };

        // Create lightbox instance with the clicked image
        const instance = basicLightbox.create(`
          <div class="lightbox-container">
            <img src="${img.src}" alt="${img.alt}" style="max-width: 90vw; max-height: 90vh;">
            <button class="lightbox-close" aria-label="Close lightbox">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
        `, {
          onShow: () => {
            // Add escape key handler
            document.addEventListener('keydown', handleEscape);
          },
          onClose: () => {
            // Remove escape key handler
            document.removeEventListener('keydown', handleEscape);
          }
        });

        // Show the lightbox
        instance.show();

        // Add click handler for close button
        const closeBtn = instance.element().querySelector('.lightbox-close');
        if (closeBtn) {
          closeBtn.addEventListener('click', () => instance.close());
        }
      });
    }
  });
}; 
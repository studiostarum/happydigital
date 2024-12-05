export const initCarouselHeight = () => {
    function setEqualHeight() {
        // Find all slider masks with the data attribute
        const sliderMasks = document.querySelectorAll('[st-element="slider"]');
        
        sliderMasks.forEach(sliderMask => {
            const slides = sliderMask.querySelectorAll('.w-slide');
            let maxHeight = 0;

            // Reset all slides to their natural height before calculating the tallest slide
            slides.forEach(slide => {
                slide.style.height = '';
                if (slide.offsetHeight > maxHeight) {
                    maxHeight = slide.offsetHeight;
                }
            });

            // Set all slides to the height of the tallest slide
            slides.forEach(slide => {
                slide.style.height = maxHeight + 'px';
            });
        });
    }

    // Run the function initially
    setEqualHeight();

    // Re-calculate heights on window resize
    window.addEventListener('resize', setEqualHeight);
};

// Run on page load
document.addEventListener('DOMContentLoaded', initCarouselHeight);

const initCarouselHeight = () => {
    // Find all elements with the data attribute
    const carousels = document.querySelectorAll('[st-element="slider"]');

    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.w-slide');
        
        const setEqualHeight = () => {
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
        };

        // Run the function initially
        setEqualHeight();

        // Re-calculate heights on window resize
        window.addEventListener('resize', setEqualHeight);

        // Optional: Re-run on slide change if using Webflow's native slider
        const sliderNext = carousel.querySelector('.w-slider-arrow-right');
        const sliderPrev = carousel.querySelector('.w-slider-arrow-left');
        
        if (sliderNext && sliderPrev) {
            [sliderNext, sliderPrev].forEach(arrow => {
                arrow.addEventListener('click', () => {
                    // Small delay to ensure slide transition is complete
                    setTimeout(setEqualHeight, 100);
                });
            });
        }
    });
};

// Run on page load
document.addEventListener('DOMContentLoaded', initCarouselHeight);

// Export the function in case we need to call it from other components
export { initCarouselHeight };

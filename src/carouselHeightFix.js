export const initCarouselHeight = () => {
    // Find all slider masks with the data attribute
    const sliderMasks = document.querySelectorAll('[st-element="slider"]');

    sliderMasks.forEach(sliderMask => {
        const slides = sliderMask.querySelectorAll('.w-slide');
        const slider = sliderMask.closest('.w-slider');
        
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

        // Re-run on slide change if using Webflow's native slider
        if (slider) {
            const sliderNext = slider.querySelector('.w-slider-arrow-right');
            const sliderPrev = slider.querySelector('.w-slider-arrow-left');
            
            if (sliderNext && sliderPrev) {
                [sliderNext, sliderPrev].forEach(arrow => {
                    arrow.addEventListener('click', () => {
                        // Small delay to ensure slide transition is complete
                        setTimeout(setEqualHeight, 100);
                    });
                });
            }
        }
    });
};

// Run on page load
document.addEventListener('DOMContentLoaded', initCarouselHeight);

export const initCurrentPageAccordion = () => {
  // Wait for a small delay after load to ensure Webflow's JS is initialized
  window.addEventListener('load', () => {
    setTimeout(() => {
      // Find the current active link
      const currentLink = document.querySelector('.course_sublink.w--current');
      
      if (currentLink) {
        // Find the parent accordion item
        const accordionItem = currentLink.closest('.course_curriculum_item');
        
        if (accordionItem) {
          // Find the sublinks wrapper that needs to be opened
          const sublinksWrapper = accordionItem.querySelector('.course_sublinks-wrapper');
          const arrowIcon = accordionItem.querySelector('.course_link-icon');
          const sublinks = accordionItem.querySelector('.course_sublinks');
          
          if (sublinksWrapper && arrowIcon && sublinks) {
            // First set transition to none to prevent animation on load
            sublinksWrapper.style.transition = 'none';
            
            // Calculate height and open accordion
            const sublinksHeight = sublinks.offsetHeight;
            
            // Force a reflow before applying changes
            void sublinksWrapper.offsetHeight;
            
            // Apply changes
            sublinksWrapper.style.height = `${sublinksHeight}px`;
            arrowIcon.style.transform = 'rotate(180deg)';
            
            // Restore transition after a brief delay
            setTimeout(() => {
              sublinksWrapper.style.transition = '';
            }, 50);
          }
        }
      }
    }, 100); // Small delay to ensure everything is ready
  });
}; 
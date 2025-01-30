export const initCurrentPageAccordion = () => {
  // Ensure content is loaded before calculating heights
  window.addEventListener('load', () => {
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
          // Force a reflow to ensure correct height calculation
          sublinksWrapper.style.display = 'block';
          const sublinksHeight = sublinks.offsetHeight;
          
          // Set the height to show the content
          requestAnimationFrame(() => {
            sublinksWrapper.style.height = `${sublinksHeight}px`;
            arrowIcon.style.transform = 'rotate(180deg)';
          });
        }
      }
    }
  });
}; 
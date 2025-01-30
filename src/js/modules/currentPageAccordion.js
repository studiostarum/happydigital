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
        const accordionTrigger = accordionItem.querySelector('.course_link-wrapper');
        
        if (sublinksWrapper && arrowIcon && sublinks && accordionTrigger) {
          // Temporarily remove Webflow's click listener
          const oldTrigger = accordionTrigger.cloneNode(true);
          accordionTrigger.parentNode.replaceChild(oldTrigger, accordionTrigger);
          
          // Calculate height and open accordion
          const sublinksHeight = sublinks.offsetHeight;
          sublinksWrapper.style.height = `${sublinksHeight}px`;
          arrowIcon.style.transform = 'rotate(180deg)';
          
          // Reattach Webflow's listeners after a short delay
          setTimeout(() => {
            window.Webflow && window.Webflow.require('ix2').init();
          }, 50);
        }
      }
    }
  });
}; 
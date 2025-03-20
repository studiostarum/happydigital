export const initCurrentPageAccordion = () => {
  const DEBUG = false; // Set to true to enable debugging
  
  const debug = (message, element = null) => {
    if (!DEBUG) return;
    console.log(`[Accordion Debug] ${message}`);
    if (element) {
      console.log(element);
    }
  };

  const openAccordion = (currentLink) => {
    // Find the parent accordion item that contains the current link
    const accordionItem = currentLink.closest('.course_curriculum_item');
    debug('Found parent accordion item:', accordionItem);
    
    if (accordionItem) {
      // Find all the necessary elements within THIS accordion item
      const sublinksWrapper = accordionItem.querySelector('.course_sublinks-wrapper');
      const arrowIcon = accordionItem.querySelector('.course_link-icon');
      
      debug('Found elements in current accordion:', {
        sublinksWrapper,
        arrowIcon
      });
      
      if (sublinksWrapper && arrowIcon) {
        if (accordionItem.classList.contains('is-active')) {
          debug('Accordion already open, ensuring sublinks are visible...');
          // Ensure sublinks are visible
          sublinksWrapper.style.display = 'block';
          sublinksWrapper.style.height = 'auto';
          arrowIcon.style.transform = 'rotate(180deg)';
          currentLink.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          return;
        }
        
        debug('All required elements found, opening accordion...');
        
        // Trigger Webflow's click event on the accordion trigger
        const accordionTrigger = accordionItem.querySelector('.course_curriculum_link, .course_link-wrapper');
        if (accordionTrigger) {
          // Simulate a click to trigger Webflow's animation
          accordionTrigger.click();
          
          // Wait for the animation to complete and keep the accordion open
          setTimeout(() => {
            // Set the height to 'auto' as Webflow does
            sublinksWrapper.style.display = 'block';
            sublinksWrapper.style.height = 'auto';
            arrowIcon.style.transform = 'rotate(180deg)';
            
            // Add active state to parent accordion
            accordionItem.classList.add('is-active');
            
            // Scroll the active link into view smoothly
            currentLink.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            debug('Accordion opened and scrolled into view');
          }, 300); // Wait for Webflow animation (usually 300ms)
        }
        
        debug('Applied all styles and classes');
        
        // Handle window resize
        const handleResize = () => {
          if (accordionItem.classList.contains('is-active')) {
            // Maintain 'auto' height on resize
            sublinksWrapper.style.height = 'auto';
          }
        };
        
        window.addEventListener('resize', handleResize);
        debug('Added resize handler');
      } else {
        debug('❌ Missing required elements:', {
          hasSublinksWrapper: !!sublinksWrapper,
          hasArrowIcon: !!arrowIcon
        });
      }
    } else {
      debug('❌ No parent accordion item found for the current link');
    }
  };

  // Wait for Webflow's own scripts to load
  window.Webflow = window.Webflow || [];
  window.Webflow.push(() => {
    debug('Webflow initialized, starting accordion...');
    
    // Find the current active link (using Webflow's w--current class)
    const currentLink = document.querySelector('.course_sublink.w--current');
    debug('Searching for current link...', currentLink);
    
    if (!currentLink) {
      debug('❌ No active link found with w--current class');
      return;
    }

    // Open the accordion after a short delay
    setTimeout(() => {
      openAccordion(currentLink);
    }, 100);
  });
}; 
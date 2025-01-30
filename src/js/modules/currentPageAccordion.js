export const initCurrentPageAccordion = () => {
  const DEBUG = true; // Set to true to enable debugging
  
  const debug = (message, element = null) => {
    if (!DEBUG) return;
    console.log(`[Accordion Debug] ${message}`);
    if (element) {
      console.log(element);
      // Veilig checken of het element bestaat en een style object heeft
      if (element instanceof Element) {
        const originalBackground = element.style.backgroundColor || '';
        element.style.backgroundColor = '#ff00ff50';
        setTimeout(() => {
          element.style.backgroundColor = originalBackground;
        }, 1000);
      }
    }
  };

  // Wait for a small delay after load to ensure all scripts are initialized
  window.addEventListener('load', () => {
    debug('Page loaded, initializing accordion...');
    
    setTimeout(() => {
      // Find the current active link (using Webflow's w--current class)
      const currentLink = document.querySelector('.course_sublink.w--current');
      debug('Searching for current link...', currentLink);
      
      if (!currentLink) {
        debug('❌ No active link found with w--current class');
        return;
      }
      
      // Find the parent accordion item that contains the current link
      const accordionItem = currentLink.closest('.course_curriculum_item');
      debug('Found parent accordion item:', accordionItem);
      
      if (accordionItem) {
        // Find all the necessary elements within THIS accordion item
        const sublinksWrapper = accordionItem.querySelector('.course_sublinks-wrapper');
        const arrowIcon = accordionItem.querySelector('.course_link-icon');
        const sublinks = accordionItem.querySelector('.course_sublinks');
        
        debug('Found elements in current accordion:', {
          sublinksWrapper,
          arrowIcon,
          sublinks
        });
        
        if (sublinksWrapper && arrowIcon && sublinks) {
          debug('All required elements found, opening accordion...');
          
          // First set transition to none to prevent animation on load
          sublinksWrapper.style.transition = 'none';
          
          // Calculate height and open accordion
          const sublinksHeight = sublinks.offsetHeight;
          debug(`Calculated height: ${sublinksHeight}px`);
          
          // Force a reflow before applying changes
          void sublinksWrapper.offsetHeight;
          
          // Apply changes
          sublinksWrapper.style.height = `${sublinksHeight}px`;
          sublinksWrapper.style.display = 'block';
          sublinksWrapper.style.opacity = '1';
          sublinksWrapper.style.visibility = 'visible';
          arrowIcon.style.transform = 'rotate(180deg)';
          
          // Add active state to parent accordion
          accordionItem.classList.add('is-active');
          debug('Applied all styles and classes');
          
          // Restore transition after a brief delay
          setTimeout(() => {
            sublinksWrapper.style.transition = '';
            
            // Scroll the active link into view smoothly
            currentLink.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            debug('Restored transition and scrolled into view');
          }, 50);
          
          // Handle window resize to recalculate height
          const handleResize = () => {
            if (accordionItem.classList.contains('is-active')) {
              const newHeight = sublinks.offsetHeight;
              debug(`Window resized, new height: ${newHeight}px`);
              sublinksWrapper.style.height = `${newHeight}px`;
            }
          };
          
          window.addEventListener('resize', handleResize);
          debug('Added resize handler');
        } else {
          debug('❌ Missing required elements:', {
            hasSublinksWrapper: !!sublinksWrapper,
            hasArrowIcon: !!arrowIcon,
            hasSublinks: !!sublinks
          });
        }
      } else {
        debug('❌ No parent accordion item found for the current link');
      }
    }, 100);
  });
}; 
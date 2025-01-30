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

  const openAccordion = (currentLink) => {
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
        
        // Trigger Webflow's click event op de accordion trigger
        const accordionTrigger = accordionItem.querySelector('.course_curriculum_link, .course_link-wrapper');
        if (accordionTrigger) {
          // Simuleer een click om Webflow's animatie te triggeren
          accordionTrigger.click();
          
          // Wacht tot de animatie klaar is en zorg dat de accordion open blijft
          setTimeout(() => {
            // Zet de height op 'auto' zoals Webflow dat ook doet
            sublinksWrapper.style.height = 'auto';
            arrowIcon.style.transform = 'rotate(180deg)';
            
            // Add active state to parent accordion
            accordionItem.classList.add('is-active');
            
            // Scroll the active link into view smoothly
            currentLink.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            debug('Accordion opened and scrolled into view');
          }, 300); // Wacht op de Webflow animatie (meestal 300ms)
        }
        
        debug('Applied all styles and classes');
        
        // Handle window resize
        const handleResize = () => {
          if (accordionItem.classList.contains('is-active')) {
            // Behoud 'auto' height bij resize
            sublinksWrapper.style.height = 'auto';
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
  };

  // Wacht tot Webflow's eigen scripts geladen zijn
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

    // Open de accordion na een korte vertraging
    setTimeout(() => {
      openAccordion(currentLink);
    }, 100);
  });
}; 
export const initCurrentPageAccordion = () => {
  // Find the current active link
  const currentLink = document.querySelector('.course_sublink.w--current');
  
  if (currentLink) {
    // Find the parent accordion item
    const accordionItem = currentLink.closest('.course_curriculum_item');
    
    if (accordionItem) {
      // Find the sublinks wrapper that needs to be opened
      const sublinksWrapper = accordionItem.querySelector('.course_sublinks-wrapper');
      const arrowIcon = accordionItem.querySelector('.course_link-icon');
      
      if (sublinksWrapper && arrowIcon) {
        // Get the actual height needed
        const sublinksHeight = sublinksWrapper.querySelector('.course_sublinks').offsetHeight;
        
        // Set the height to show the content
        sublinksWrapper.style.height = `${sublinksHeight}px`;
        
        // Rotate the arrow icon
        arrowIcon.style.transform = 'rotate(180deg)';
      }
    }
  }
}; 
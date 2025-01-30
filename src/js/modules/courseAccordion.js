export function initCourseAccordion() {
    // Find the current link by matching href with current path
    const currentPath = window.location.pathname;
    const currentLink = document.querySelector(`.course_sublink[href="${currentPath}"]`);
    console.log('Current path:', currentPath);
    console.log('Current link found:', currentLink);

    if (currentLink) {
        // Find the parent accordion
        const accordion = currentLink.closest('.course_sidebar-accordion');
        console.log('Parent accordion found:', accordion);

        if (accordion) {
            // Open this accordion
            const content = accordion.querySelector('.course_sublinks-wrapper');
            console.log('Content to open:', content);
            
            if (content) {
                // Make sure the content wrapper and its parents are visible
                let parent = content;
                while (parent) {
                    if (parent.style) {
                        parent.style.display = 'block';
                    }
                    parent = parent.parentElement;
                }
                
                content.style.height = `${content.scrollHeight}px`;
                
                const icon = accordion.querySelector('.course_link-icon');
                if (icon) {
                    icon.style.transform = 'rotate(180deg)';
                    icon.style.transition = 'transform 0.3s ease';
                }
            }
        }
    }

    // Add click handlers to all accordion headers
    const accordionHeaders = document.querySelectorAll('.course_sidebar-accordion');
    console.log('Found accordion headers:', accordionHeaders.length);
    accordionHeaders.forEach(header => {
        header.addEventListener('click', handleAccordionClick);
    });
}

function handleAccordionClick(event) {
    // Prevent click from bubbling to parent accordions
    event.stopPropagation();
    
    const accordion = event.currentTarget;
    const content = accordion.querySelector('.course_sublinks-wrapper');
    const icon = accordion.querySelector('.course_link-icon');

    if (!content) return;

    const isOpen = content.style.height !== '0px' && content.style.height !== '';

    // Close all other accordions at the same level
    const parent = accordion.parentElement;
    const siblings = parent.querySelectorAll('.course_sidebar-accordion');
    siblings.forEach(sibling => {
        if (sibling !== accordion) {
            const siblingContent = sibling.querySelector('.course_sublinks-wrapper');
            const siblingIcon = sibling.querySelector('.course_link-icon');
            if (siblingContent) {
                siblingContent.style.height = '0px';
            }
            if (siblingIcon) {
                siblingIcon.style.transform = 'rotate(0deg)';
                siblingIcon.style.transition = 'transform 0.3s ease';
            }
        }
    });

    // Toggle current accordion
    if (isOpen) {
        content.style.height = '0px';
        if (icon) {
            icon.style.transform = 'rotate(0deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    } else {
        // Ensure content is visible before measuring height
        content.style.display = 'block';
        content.style.height = `${content.scrollHeight}px`;
        if (icon) {
            icon.style.transform = 'rotate(180deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    }
}

// Initialize when Webflow is ready
window.Webflow = window.Webflow || [];
window.Webflow.push(() => {
    initCourseAccordion();
});

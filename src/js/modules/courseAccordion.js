export function initCourseAccordion() {
    // Find any link that's currently active
    const currentLink = document.querySelector('.course_sublink.w--current');
    console.log('Current link found:', currentLink);

    if (currentLink) {
        // Find the parent accordion by traversing up through w-dyn-* elements
        let element = currentLink;
        while (element && !element.classList.contains('course_link')) {
            element = element.parentElement;
        }
        
        const accordion = element;
        console.log('Parent accordion found:', accordion);

        if (accordion) {
            // Open this accordion
            const content = accordion.querySelector('.course_sublinks-wrapper');
            console.log('Content to open:', content);
            
            if (content) {
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
    const accordionHeaders = document.querySelectorAll('.course_link');
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
    const siblings = parent.querySelectorAll('.course_link');
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

export function initCourseAccordion() {
    // Find the current active link
    const currentLink = document.querySelector('.course_sublink.w--current');

    if (currentLink) {
        // Find the parent accordion container
        const accordionContainer = currentLink.closest('[data-accordion]');

        if (accordionContainer) {
            openAccordion(accordionContainer);
        }
    }

    // Add click handlers to all accordion headers
    document.querySelectorAll('[data-accordion] > .course_link-wrapper').forEach(trigger => {
        trigger.addEventListener('click', handleAccordionClick);
    });
}

function handleAccordionClick(event) {
    const accordionContainer = event.currentTarget.closest('[data-accordion]');
    if (!accordionContainer) return;

    const isOpen = accordionContainer.hasAttribute('data-open');
    
    // Close all other accordions
    document.querySelectorAll('[data-accordion][data-open]').forEach(accordion => {
        if (accordion !== accordionContainer) {
            closeAccordion(accordion);
        }
    });

    // Toggle current accordion
    if (isOpen) {
        closeAccordion(accordionContainer);
    } else {
        openAccordion(accordionContainer);
    }
}

function openAccordion(accordionContainer) {
    const content = accordionContainer.querySelector('.course_sublinks-wrapper');
    const icon = accordionContainer.querySelector('.course_link-icon');
    
    if (content) {
        const actualHeight = content.scrollHeight;
        content.style.height = `${actualHeight}px`;
        accordionContainer.setAttribute('data-open', '');
        
        if (icon) {
            icon.style.transform = 'rotate(180deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    }
}

function closeAccordion(accordionContainer) {
    const content = accordionContainer.querySelector('.course_sublinks-wrapper');
    const icon = accordionContainer.querySelector('.course_link-icon');
    
    if (content) {
        content.style.height = '0px';
        accordionContainer.removeAttribute('data-open');
        
        if (icon) {
            icon.style.transform = 'rotate(0deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    }
}

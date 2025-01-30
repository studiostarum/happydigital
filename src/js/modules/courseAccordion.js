// Debug utility that survives minification
const debug = {
    enabled: true, // Set to false to disable all logging
    log: (...args) => debug.enabled && console.log('[Accordion]', ...args),
    warn: (...args) => debug.enabled && console.warn('[Accordion]', ...args),
    group: (...args) => debug.enabled && console.group('[Accordion]', ...args),
    groupEnd: () => debug.enabled && console.groupEnd()
};

export function initCourseAccordion() {
    debug.log('Initializing');
    
    // Find the current active link (handle both data-attribute and Webflow's current class)
    const currentLink = document.querySelector('[data-accordion-link].w--current, .course_sublink.w--current');
    debug.log('Current Link:', currentLink);

    if (currentLink) {
        // Find the parent accordion container
        const accordionContainer = currentLink.closest('[data-accordion]');
        debug.log('Parent Container:', accordionContainer);

        if (accordionContainer) {
            // First close any open accordions
            const openAccordions = document.querySelectorAll('[data-accordion][data-open]');
            debug.log('Open Accordions:', openAccordions.length);
            
            openAccordions.forEach(accordion => {
                if (accordion !== accordionContainer) {
                    debug.log('Closing:', accordion);
                    closeAccordion(accordion);
                }
            });
            
            // Then open the current one
            debug.log('Opening Current:', accordionContainer);
            openAccordion(accordionContainer);
        }
    } else {
        debug.warn('No current link found:', {
            'data-accordion-link': !!document.querySelector('[data-accordion-link].w--current'),
            'course_sublink': !!document.querySelector('.course_sublink.w--current')
        });
    }

    // Add click handlers to all accordion triggers
    const triggers = document.querySelectorAll('[data-accordion-trigger]');
    debug.log('Triggers found:', triggers.length);
    
    triggers.forEach(trigger => {
        trigger.addEventListener('click', handleAccordionClick);
    });
}

function handleAccordionClick(event) {
    debug.log('Click:', event.currentTarget);
    
    const accordionContainer = event.currentTarget.closest('[data-accordion]');
    if (!accordionContainer) {
        debug.warn('No parent accordion found');
        return;
    }

    const isOpen = accordionContainer.hasAttribute('data-open');
    debug.log('State:', { isOpen });
    
    // Close all other accordions
    const openAccordions = document.querySelectorAll('[data-accordion][data-open]');
    debug.log('Open Accordions:', openAccordions.length);
    
    openAccordions.forEach(accordion => {
        if (accordion !== accordionContainer) {
            debug.log('Closing Other:', accordion);
            closeAccordion(accordion);
        }
    });

    // Toggle current accordion
    if (isOpen) {
        debug.log('Closing Current');
        closeAccordion(accordionContainer);
    } else {
        debug.log('Opening Current');
        openAccordion(accordionContainer);
    }
}

function openAccordion(accordionContainer) {
    debug.group('Opening');
    
    const content = accordionContainer.querySelector('[data-accordion-content]');
    const icon = accordionContainer.querySelector('[data-accordion-icon]');
    
    debug.log('Elements:', {
        content: !!content,
        icon: !!icon
    });
    
    if (content) {
        const actualHeight = content.scrollHeight;
        debug.log('Height:', actualHeight);
        
        content.style.height = `${actualHeight}px`;
        accordionContainer.setAttribute('data-open', '');
        
        if (icon) {
            icon.style.transform = 'rotate(180deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    } else {
        debug.warn('No content element found');
    }
    
    debug.groupEnd();
}

function closeAccordion(accordionContainer) {
    debug.group('Closing');
    
    const content = accordionContainer.querySelector('[data-accordion-content]');
    const icon = accordionContainer.querySelector('[data-accordion-icon]');
    
    debug.log('Elements:', {
        content: !!content,
        icon: !!icon
    });
    
    if (content) {
        content.style.height = '0px';
        accordionContainer.removeAttribute('data-open');
        
        if (icon) {
            icon.style.transform = 'rotate(0deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    } else {
        debug.warn('No content element found');
    }
    
    debug.groupEnd();
}

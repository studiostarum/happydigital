export function initCourseAccordion() {
    console.log('=== Debug Info ===');
    
    // Find current link directly
    const currentLink = document.querySelector('a[data-accordion-link].w--current');
    console.log('Current Link:', currentLink);

    if (currentLink) {
        // Find the parent accordion container
        const accordionContainer = currentLink.closest('[data-accordion]');
        console.log('Parent Container:', accordionContainer);

        if (accordionContainer) {
            // First close any open accordions
            const openAccordions = document.querySelectorAll('[data-accordion][data-open]');
            console.log('Open Accordions:', openAccordions.length);
            
            openAccordions.forEach(accordion => {
                if (accordion !== accordionContainer) {
                    closeAccordion(accordion);
                }
            });
            
            // Then open the current one
            openAccordion(accordionContainer);
        } else {
            console.log('No accordion container found for current link');
        }
    } else {
        console.log('No current link found. HTML of first link:', {
            'selector-used': 'a[data-accordion-link].w--current',
            'any-current-links': document.querySelectorAll('.w--current').length,
            'sample-link': document.querySelector('a[data-accordion-link]')?.outerHTML
        });
    }

    // Add click handlers to all accordion triggers
    const triggers = document.querySelectorAll('[data-accordion-trigger]');
    console.log('Triggers found:', triggers.length);
    
    triggers.forEach(trigger => {
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
    const content = accordionContainer.querySelector('[data-accordion-content]');
    const icon = accordionContainer.querySelector('[data-accordion-icon]');
    
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
    const content = accordionContainer.querySelector('[data-accordion-content]');
    const icon = accordionContainer.querySelector('[data-accordion-icon]');
    
    if (content) {
        content.style.height = '0px';
        accordionContainer.removeAttribute('data-open');
        
        if (icon) {
            icon.style.transform = 'rotate(0deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    }
}

// Wait for Webflow to initialize
window.Webflow = window.Webflow || [];
window.Webflow.push(() => {
    initCourseAccordion();
});

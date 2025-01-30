export function initCourseAccordion() {
    console.log('=== Debug Info ===');
    
    // Find current link directly
    const currentLink = document.querySelector('a[data-accordion-link].w--current');
    console.log('Current Link:', currentLink);

    if (currentLink) {
        // Find all parent accordions (there might be nested ones)
        let element = currentLink;
        const parentAccordions = [];
        
        while (element) {
            const accordion = element.closest('[data-accordion]');
            if (!accordion) break;
            parentAccordions.push(accordion);
            element = accordion.parentElement;
        }
        
        console.log('Parent Accordions found:', parentAccordions.length);

        if (parentAccordions.length > 0) {
            // Close all accordions first
            document.querySelectorAll('[data-accordion][data-open]').forEach(accordion => {
                if (!parentAccordions.includes(accordion)) {
                    closeAccordion(accordion);
                }
            });
            
            // Open all parent accordions from top to bottom
            parentAccordions.reverse().forEach(accordion => {
                openAccordion(accordion);
            });
        } else {
            console.log('No accordion containers found for current link');
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
    
    // Close all other accordions at the same level
    const parent = accordionContainer.parentElement;
    const siblings = parent.querySelectorAll('[data-accordion]');
    siblings.forEach(accordion => {
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

document.addEventListener('DOMContentLoaded', function () {

    // Find the current page link (has w--current class)
    const currentLink = document.querySelector('.course_sublink.w--current');

    if (currentLink) {
        // Find the parent accordion container
        const accordionContainer = currentLink.closest('.course_sidebar-accordion');

        if (accordionContainer) {
            // Find the sublinks wrapper and icon within this accordion
            const sublinksWrapper = accordionContainer.querySelector('.course_sublinks-wrapper');
            const icon = accordionContainer.querySelector('.course_link-icon');

            if (sublinksWrapper) {
                // Get the actual height needed
                const actualHeight = sublinksWrapper.scrollHeight;

                // Set the height to show all content
                sublinksWrapper.style.height = actualHeight + 'px';

                // Rotate the icon if found
                if (icon) {
                    icon.style.transform = 'rotate(180deg)';
                }
            }
        }
    }
});

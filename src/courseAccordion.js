export function initCourseAccordion() {
    const currentLink = document.querySelector('.course_sublink.w--current');

    if (currentLink) {
        const accordionContainer = currentLink.closest('.course_sidebar-accordion');

        if (accordionContainer) {
            const sublinksWrapper = accordionContainer.querySelector('.course_sublinks-wrapper');
            const icon = accordionContainer.querySelector('.course_link-icon');

            if (sublinksWrapper) {
                const actualHeight = sublinksWrapper.scrollHeight;
                sublinksWrapper.style.height = actualHeight + 'px';

                if (icon) {
                    icon.style.transform = 'rotate(180deg)';
                }
            }
        }
    }
}

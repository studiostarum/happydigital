export function initNavMenu() {
    const menuTrigger = document.querySelector('.navbar_menu-button');
    const menuWrapper = document.querySelector('.navbar_menu-wrapper');
    
    if (!menuTrigger || !menuWrapper) return;

    function toggleScroll(disable) {
        document.body.style.overflow = disable ? 'hidden' : '';
        document.documentElement.style.overflow = disable ? 'hidden' : '';
    }

    menuTrigger.addEventListener('click', () => {
        const isMenuOpen = menuWrapper.style.display === 'flex';
        toggleScroll(!isMenuOpen);
    });

    // Handle menu close button if it exists
    const closeButton = document.querySelector('.navbar_close-button');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            toggleScroll(false);
        });
    }

    // Reset scroll when clicking outside menu
    menuWrapper.addEventListener('click', (e) => {
        if (e.target === menuWrapper) {
            toggleScroll(false);
        }
    });
}

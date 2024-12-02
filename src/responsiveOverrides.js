function updateHeaderBreakpoint() {
    // Create a style element if it doesn't exist
    let styleEl = document.getElementById('responsive-overrides');
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'responsive-overrides';
        document.head.appendChild(styleEl);
    }

    // Override the header breakpoint
    const css = `
        @media screen and (max-width: 1264px) {
            .nav_menu {
                display: none !important;
                position: absolute !important;
                top: 100% !important;
                left: 0 !important;
                right: 0 !important;
                background-color: var(--background) !important;
                padding: 1rem !important;
            }
            .nav_menu.is-open {
                display: block !important;
            }
            .menu_icon {
                display: flex !important;
            }
            .nav_links {
                flex-direction: column !important;
                gap: 1rem !important;
            }
            .nav_dropdown {
                width: 100% !important;
            }
            .nav_dropdown_toggle {
                width: 100% !important;
            }
            .navbar_dropdown_items-wrapper {
                position: relative !important;
                width: 100% !important;
                max-width: none !important;
                padding: 1rem 0 0 0 !important;
            }
            .nav_dropdown_items {
                grid-template-columns: 1fr !important;
            }
        }
        @media screen and (min-width: 1265px) {
            .nav_menu {
                display: flex !important;
                position: static !important;
                background: none !important;
                padding: 0 !important;
            }
            .menu_icon {
                display: none !important;
            }
            .nav_links {
                flex-direction: row !important;
            }
        }
    `;

    styleEl.textContent = css;
}

// Handle mobile menu toggle
function initMobileMenu() {
    const menuIcon = document.querySelector('.menu_icon');
    const navMenu = document.querySelector('.nav_menu');
    
    if (menuIcon && navMenu) {
        menuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('is-open');
        });
    }
}

export function initResponsiveOverrides() {
    // Run once on load
    updateHeaderBreakpoint();
    initMobileMenu();

    // Update if window is resized
    window.addEventListener('resize', updateHeaderBreakpoint);
}

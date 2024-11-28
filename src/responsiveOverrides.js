function updateHeaderBreakpoint() {
    // Create a style element if it doesn't exist
    let styleEl = document.getElementById('responsive-overrides');
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'responsive-overrides';
        document.head.appendChild(styleEl);
    }

    // Override Webflow's default breakpoint for the header
    const css = `
        @media screen and (max-width: 1264px) {
            .w-nav-button {
                display: block !important;
            }
            .w-nav-menu {
                display: none !important;
                background-color: var(--background) !important;
            }
            .w-nav-menu.w--open {
                display: block !important;
                position: absolute !important;
                top: 100% !important;
                right: 0 !important;
                left: 0 !important;
            }
            .w-nav-overlay {
                display: none !important;
            }
            .w-nav-overlay.w--open {
                display: block !important;
            }
        }
        @media screen and (min-width: 1265px) {
            .w-nav-button {
                display: none !important;
            }
            .w-nav-menu {
                display: flex !important;
                background: none !important;
            }
            .w-nav-menu.w--open {
                position: static !important;
            }
        }
    `;

    styleEl.textContent = css;
}

export function initResponsiveOverrides() {
    // Run once on load
    updateHeaderBreakpoint();

    // Update if window is resized
    window.addEventListener('resize', updateHeaderBreakpoint);
}

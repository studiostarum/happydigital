// =========================================
// Course Accordion Script
// =========================================
document.addEventListener('DOMContentLoaded', function () {
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
});

// =========================================
// Custom Select Script
// =========================================
document.addEventListener('DOMContentLoaded', function () {
    const customSelects = document.querySelectorAll('[data-form-element="select"]');
    const dropdowns = new Map();

    function closeOtherDropdowns(exceptGroupId) {
        dropdowns.forEach((state, groupId) => {
            if (groupId !== exceptGroupId && state.isOpen) {
                state.toggle(false);
            }
        });
    }

    customSelects.forEach(select => {
        const groupId = select.getAttribute('data-form-group');
        const dropdown = document.querySelector(`[data-form-element="dropdown"][data-form-group="${groupId}"]`);

        if (!dropdown) return;

        const state = {
            isOpen: false,
            toggle: function (force = null) {
                this.isOpen = force !== null ? force : !this.isOpen;

                if (this.isOpen) {
                    closeOtherDropdowns(groupId);

                    const selectRect = select.getBoundingClientRect();
                    const viewportWidth = window.innerWidth;

                    dropdown.style.display = 'block';
                    dropdown.style.opacity = '0';

                    const dropdownRect = dropdown.getBoundingClientRect();

                    if (selectRect.left + dropdownRect.width > viewportWidth - 20) {
                        const overflow = (selectRect.left + dropdownRect.width) - (viewportWidth - 20);
                        dropdown.style.left = `${-overflow}px !important`;
                    } else {
                        dropdown.style.left = '0 !important';
                    }

                    select.style.backgroundColor = 'rgb(226, 232, 240)';
                    requestAnimationFrame(() => {
                        dropdown.style.opacity = '1';
                    });
                } else {
                    dropdown.style.opacity = '0';
                    select.style.backgroundColor = '';
                    setTimeout(() => {
                        dropdown.style.display = 'none';
                    }, 200);
                }
            }
        };

        dropdowns.set(groupId, state);

        select.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            state.toggle();
        });

        const radioButtons = dropdown.querySelectorAll('.form_radio.is-filter');
        radioButtons.forEach(radio => {
            radio.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedText = radio.querySelector('.form_radio-label').textContent;
                select.querySelector('div').textContent = selectedText;
                state.toggle(false);
            });
        });
    });

    document.addEventListener('click', () => {
        dropdowns.forEach(state => {
            if (state.isOpen) {
                state.toggle(false);
            }
        });
    });
});

// =========================================
// Category Index Script
// =========================================
function updateCategoryIndices() {
    const indexElements = document.querySelectorAll('.category-card_index');
    indexElements.forEach((element, index) => {
        const formattedIndex = (index + 1).toString().padStart(2, '0');
        element.textContent = formattedIndex;
    });
}

document.addEventListener('DOMContentLoaded', updateCategoryIndices);

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            updateCategoryIndices();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.collection-list');
    if (container) {
        observer.observe(container, {
            childList: true,
            subtree: true
        });
    }
});

window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
    'cmsload',
    (listInstances) => {
        listInstances.forEach(instance => {
            instance.on('renderitems', updateCategoryIndices);
        });
    }
]);

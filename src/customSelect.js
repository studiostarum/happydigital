export function initCustomSelect() {
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
}

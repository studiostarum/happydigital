function updateCategoryIndices() {
    const indexElements = document.querySelectorAll('.category-card_index');
    indexElements.forEach((element, index) => {
        const formattedIndex = (index + 1).toString().padStart(2, '0');
        element.textContent = formattedIndex;
    });
}

export function initCategoryIndex() {
    updateCategoryIndices();

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                updateCategoryIndices();
            }
        });
    });

    const container = document.querySelector('.collection-list');
    if (container) {
        observer.observe(container, {
            childList: true,
            subtree: true
        });
    }

    window.fsAttributes = window.fsAttributes || [];
    window.fsAttributes.push([
        'cmsload',
        (listInstances) => {
            listInstances.forEach(instance => {
                instance.on('renderitems', updateCategoryIndices);
            });
        }
    ]);
}

// Function to update category indices
function updateCategoryIndices() {
    // Get all elements with class 'category-card_index'
    const indexElements = document.querySelectorAll('.category-card_index');

    // Loop through each element and update its content
    indexElements.forEach((element, index) => {
        // Add leading zero for single digits
        const formattedIndex = (index + 1).toString().padStart(2, '0');
        element.textContent = formattedIndex;
    });
}

// Run on initial load
document.addEventListener('DOMContentLoaded', updateCategoryIndices);

// Create a MutationObserver to watch for changes
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            updateCategoryIndices();
        }
    });
});

// Start observing the container that holds the category cards
document.addEventListener('DOMContentLoaded', () => {
    // Replace '.collection-list' with the actual class of your container
    const container = document.querySelector('.collection-list');
    if (container) {
        observer.observe(container, {
            childList: true,
            subtree: true
        });
    }
});

// Optional: Listen for Finsweet's custom event
window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
    'cmsload',
    (listInstances) => {
        // When Finsweet loads new items
        listInstances.forEach(instance => {
            instance.on('renderitems', updateCategoryIndices);
        });
    }
]);

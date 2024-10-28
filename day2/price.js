const sortSelect = document.getElementById('sortSelect');
const myList = document.getElementById('myList');

// Function to sort the list based on the selected option
function sortList(order) {
    const items = Array.from(myList.getElementsByTagName('li'));
    const sortedItems = items.sort((a, b) => {
        const numA = parseInt(a.textContent, 10);
        const numB = parseInt(b.textContent, 10);
        return order === 'asc' ? numA - numB : numB - numA;
    });

    // Clear the current list and append sorted items
    myList.innerHTML = '';
    sortedItems.forEach(item => myList.appendChild(item));
}

// Event listener for dropdown changes
sortSelect.addEventListener('change', () => {
    const selectedValue = sortSelect.value;
    if (selectedValue) {
        sortList(selectedValue);
    }
});

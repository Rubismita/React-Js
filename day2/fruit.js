function filterList() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var items = document.querySelectorAll('#itemList li'); 

    items.forEach(item => {
       
        if (item.textContent.toLowerCase().includes(input)) { //filter
            item.style.display = ''; 
        } else {
            item.style.display = 'none'; 
        }
    });
}


document.getElementById('searchInput').addEventListener('input', filterList);
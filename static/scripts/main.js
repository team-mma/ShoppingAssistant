//compile the template
let source = $("#list-item-template").html();
let template = Handlebars.compile(source);

let parentDiv = $("#templatedLists");

let savedShoppingProductsList = JSON.parse(localStorage.getItem('shoppingHistoryProducts'));
for (let i = 0; i < savedShoppingProductsList.length; i++) {
    currentProducts.push(savedShoppingProductsList[i]);
    let curData = currentProducts[i];
    let curHtml = template(curData);
    parentDiv.append(curHtml);
}

function addItem(id) {
    console.log('add id:', id);
    let savedShoppingProductsList = JSON.parse(localStorage.getItem('shoppingHistoryProducts'));
    increaseItemCount(id, savedShoppingProductsList);
    localStorage.setItem('shoppingHistoryProducts', JSON.stringify(savedShoppingProductsList));

    // TODO: The localStorage is updated. The page should refresh to show the updated changes
}

function increaseItemCount(id, savedShoppingProductsList) {
    for (let i = 0; i < savedShoppingProductsList.length; i++) {
        let prod = savedShoppingProductsList[i];
        if (prod.id === id) {
            let prodTitle = savedShoppingProductsList[i].productTitle;
            alert("Quantity updated: " + prodTitle);
            savedShoppingProductsList[i].productQuantity =
                savedShoppingProductsList[i].productQuantity + 1;
            return;
        }
    }
}

function removeItem(id) {
    console.log('remove id:', id);
    let savedShoppingProductsList = JSON.parse(localStorage.getItem('shoppingHistoryProducts'));
    deleteItemFromStorage(id, savedShoppingProductsList);
    localStorage.setItem('shoppingHistoryProducts', JSON.stringify(savedShoppingProductsList));
}

function deleteItemFromStorage(id, savedShoppingProductsList) {
    for (let i = 0; i < savedShoppingProductsList.length; i++) {
        let prod = savedShoppingProductsList[i];
        if (prod.id === id) {
            let prodTitle = savedShoppingProductsList[i].productTitle;
            alert("Deleting " + prodTitle + " ...");
            delete savedShoppingProductsList[i];
            savedShoppingProductsList.splice(i, 1);
            return;
        }
    }
}

//Removes or adds the item for now
$("ul").on("click", "i", function (e) {
    console.log('click');
    e.preventDefault();
    if (this.className === "arrow left") {
        //TODO: reduce quantity, not remove item
        $(this).parent().remove();
    } else if (this.className === "arrow right") {
//        alert("Quantity update noted!");
        //TODO: update quantity
    }
});

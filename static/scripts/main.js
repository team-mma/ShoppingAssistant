//compile the template
let source = $("#list-item-template").html();
let template = Handlebars.compile(source);

let parentDiv = $("#templatedLists");

//shows current products as a list on the homepage
let currentProductsList = JSON.parse(localStorage.getItem('currentProducts'));
for (let i = 0; i < currentProductsList.length; i++) {
    let curData = currentProductsList[i];
    let curHtml = template(curData);
    parentDiv.append(curHtml);
}

//Increases item count in current products
function increaseItemCount(id) {
    console.log('add id:', id);
    let tempList = JSON.parse(localStorage.getItem('currentProducts'));
    increaseQuantity(id, tempList);
    localStorage.setItem('currentProducts', JSON.stringify(tempList));
    let curData = tempList[id];
    let curHtml = template(curData);
    document.getElementById(id).innerHTML = curHtml;
}

//Helper method to increase quantity
function increaseQuantity(id, tempList) {
    for (let i = 0; i < tempList.length; i++) {
        let prod = tempList[i];
        if (prod.id === id) {
            tempList[i].productQuantity =
                tempList[i].productQuantity + 1;
            return;
        }
    }
}

//Method to decrease quantity or remove item
function removeItem(id){
    console.log('add id:', id);
    let tempList = JSON.parse(localStorage.getItem('currentProducts'));
    for (let i = 0; i < tempList.length; i++) { //finding item
        let prod = tempList[i];
        if (prod.id === id) {
            if (prod.quantity > 1) {
                tempList[i].productQuantity =
                    tempList[i].productQuantity - 1;
            }
            else {
                savedShoppingProductsList.splice(i, 1);
            }

        }
  }
//if quantity is > 1, product quantity should be decreased
//if quantity is 1, product should be removed from the list completely

}

//Helper method to decrease quantity
function decreaseQuantity(id, tempList) {
    for (let i = 0; i < tempList.length; i++) {
        let prod = tempList[i];
        if (prod.id === id) {
            let prodTitle = tempList[i].productTitle;
            tempList[i].productQuantity =
                tempList[i].productQuantity - 1;
            return;
        }
    }
}

/*
//Removes item from current products
function removeItem(id) {
    console.log('remove id:', id);
    let savedShoppingProductsList = JSON.parse(localStorage.getItem('shoppingHistoryProducts'));
    deleteItemFromStorage(id, savedShoppingProductsList);
    localStorage.setItem('shoppingHistoryProducts', JSON.stringify(savedShoppingProductsList));
}
*/

/**
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
**/

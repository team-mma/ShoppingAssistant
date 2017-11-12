//compile the template
let source = $("#list-item-template").html();
let template = Handlebars.compile(source);

let parentDiv = $("#templatedLists");

$(document).ready(function () {
    displayShoppingList();
});

//shows current products as a list on the homepage
function displayShoppingList(){
    console.log('displayShoppingList');
    parentDiv.html("");
    let currentProductsList = JSON.parse(localStorage.getItem('currentProducts'));
    for (let i = 0; i < currentProductsList.length; i++) {
        let curData = currentProductsList[i];
        let curHtml = template(curData);
        parentDiv.append(curHtml);
    }   
}

//Increases item count in current products
function increaseItemCount(id) {
    console.log('add id:', id);
    let tempList = JSON.parse(localStorage.getItem('currentProducts'));
    increaseQuantity(id, tempList);
    localStorage.setItem('currentProducts', JSON.stringify(tempList));
    displayShoppingList();
}

//Helper method to increase quantity
function increaseQuantity(id, tempList) {
    for (let i = 0; i < tempList.length; i++) {
        let prod = tempList[i];
        if (prod.id === id) {
            let prodTitle = tempList[i].productTitle;
            tempList[i].productQuantity =
                tempList[i].productQuantity + 1;
            return;
        }
    }
}

//Removes item from current products
function removeItem(id) {
    console.log('remove id:', id);
    let tmpList = JSON.parse(localStorage.getItem('currentProducts'));
    deleteItemFromStorage(id, tmpList);
    localStorage.setItem('currentProducts', JSON.stringify(tmpList));
    displayShoppingList();
}

//Helper method to delete an item
function deleteItemFromStorage(id, tmpList) {
    for (let i = 0; i < tmpList.length; i++) {
        let prod = tmpList[i];
        if (prod.id === id) {
            let prodTitle = tmpList[i].productTitle;
            alert("Deleting " + prodTitle + " ...");
            delete tmpList[i];
            tmpList.splice(i, 1);
            return;
        }
    }
}

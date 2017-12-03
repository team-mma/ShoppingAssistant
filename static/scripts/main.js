//compile the template
let source = $("#list-item-template").html();
let template = Handlebars.compile(source);

let undosource = $("#undo-item-template").html();
let undotemplate = Handlebars.compile(undosource);

let parentDiv = $("#templatedLists");
let itemToDelete = -1; //ID of item to be deleted if undo is not pressed

$(document).ready(function () {
    if (localStorage.getItem('user') === 'null') {
        window.location.pathname = '/index.html'
    }
    displayShoppingList();
});

//shows current products as a list on the homepage
function displayShoppingList() {
    console.log('displayShoppingList');
    parentDiv.html("");
    let currentProductsList = JSON.parse(localStorage.getItem('currentProducts'));
    for (let i = 0; i < currentProductsList.length; i++) {
        currentProductsList[i].productCost = Number(currentProductsList[i].unitCost * currentProductsList[i].productQuantity).toFixed(2);
        currentProductsList[i].productAmount = currentProductsList[i].unitAmount * currentProductsList[i].productQuantity;
        let curData = currentProductsList[i];
        let curHtml = template(curData);
        parentDiv.append(curHtml);
    }
}

//Increases item count in current products
function increaseItemCount(id) {
    console.log('add button clicked id:', id);

    // Google Analytics Part
    if ("ga" in window) {
        tracker = ga.getAll()[0];
        if (tracker)
            tracker.send('event', 'button', 'click');
    }

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
            tempList[i].productQuantity =
                tempList[i].productQuantity + 1;
            tempList[i].productCost =
                Number(tempList[i].unitCost * (tempList[i].productQuantity)).toFixed(2);
            tempList[i].productAmount =
                tempList[i].unitAmount * (tempList[i].productQuantity);
            return;
        }
    }
}

function removeItem(id) {
    console.log('remove button clicked id:', id);
    // Google Analytics Part
    if ("ga" in window) {
        tracker = ga.getAll()[0];
        if (tracker)
            tracker.send('event', 'button', 'click');
    }

    let tempList = JSON.parse(localStorage.getItem('currentProducts'));
    decreaseQuantityOrDelete(id, tempList);
    /*if (undoBool === 1) {
        stopFunction = setTimeout(function () {
            localStorage.setItem('currentProducts', JSON.stringify(tempList));
            undoBool = 0;
            displayShoppingList();
        }, 2500);
        return;
    }
    localStorage.setItem('currentProducts', JSON.stringify(tempList));
    displayShoppingList();*/
}

function deleteItemCompletely() {
  console.log("delete item completely - method accessed");
  if (itemToDelete < 0) {
    return;
  }
  else{
    let tempList = JSON.parse(localStorage.getItem('currentProducts'));
    tempList.splice(itemToDelete,1);
    localStorage.setItem('currentProducts', JSON.stringify(tempList));
    displayShoppingList();
    itemToDelete=-1;
  }
}

function undo() {
    itemToDelete= -1;
    displayShoppingList();
}

function decreaseQuantityOrDelete(id, tempList) {
  if (itemToDelete > 0) {
    deleteItemCompletely();
  }
    for (let i = 0; i < tempList.length; i++) {
        let prod = tempList[i];
        if (prod.id === id) {
            if (prod.productQuantity > 1) {
                console.log("quantity decreased");
                tempList[i].productQuantity =
                    tempList[i].productQuantity - 1;
                tempList[i].productCost =
                    tempList[i].unitCost * (tempList[i].productQuantity);
                tempList[i].productAmount =
                    tempList[i].unitAmount * (tempList[i].productQuantity);
                localStorage.setItem('currentProducts', JSON.stringify(tempList));
                displayShoppingList();
                return;
            }
            else {
                showUndo(i);
                itemToDelete= i;
                //tempList.splice(i, 1);
            }
        }
    }
}

function showUndo(i) {
  console.log("show undo method activated");
    parentDiv.html("");
    let currentProductsList = JSON.parse(localStorage.getItem('currentProducts'));
    for (let j = 0; j < currentProductsList.length; j++) {
        if (j !== i) {
            let curData = currentProductsList[j];
            let curHtml = template(curData);
            parentDiv.append(curHtml);
        }
        else {
          console.log("should show undo template");
            let curData = currentProductsList[j];
            let curHtml = undotemplate(curData);
            parentDiv.append(curHtml);
        }
    }
}

function logout() {
    localStorage.setItem('user', null);
    localStorage.setItem('password', null);
    console.log("logout: user and pw set to null");
}

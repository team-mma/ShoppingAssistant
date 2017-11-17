//compile the template
let source = $("#list-item-template").html();
let template = Handlebars.compile(source);

let undosource = $("#undo-item-template").html();
let undotemplate = Handlebars.compile(undosource);
let undoBool = 0;
var stopFunction;

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
        currentProductsList[i].productCost=Number(currentProductsList[i].unitCost*currentProductsList[i].productQuantity).toFixed(2);
        currentProductsList[i].productAmount=currentProductsList[i].unitAmount*currentProductsList[i].productQuantity;
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
            tempList[i].productQuantity =
                tempList[i].productQuantity + 1;
            tempList[i].productCost =
                Number(tempList[i].unitCost*(tempList[i].productQuantity)).toFixed(2);
            tempList[i].productAmount =
                tempList[i].unitAmount*(tempList[i].productQuantity);
            return;
        }
    }
}

function removeItem(id) {
    console.log('remove id:', id);
    let tempList = JSON.parse(localStorage.getItem('currentProducts'));
    decreaseQuantityOrDelete(id, tempList);
    if (undoBool == 1){
      stopFunction = setTimeout(function() {
          localStorage.setItem('currentProducts', JSON.stringify(tempList));
        undoBool = 0;
        displayShoppingList();
      }, 2500);
      return;
    }
      localStorage.setItem('currentProducts', JSON.stringify(tempList));
      displayShoppingList();
}

function undo() {
  clearTimeout(stopFunction);
  displayShoppingList();
}

function decreaseQuantityOrDelete(id, tempList) {
    for (let i = 0; i < tempList.length; i++) {
        let prod = tempList[i];
        if (prod.id === id) {
            if(prod.productQuantity > 1){
              console.log("quantity decreased");
              tempList[i].productQuantity =
                tempList[i].productQuantity - 1;
              tempList[i].productCost =
                tempList[i].unitCost*(tempList[i].productQuantity);
              tempList[i].productAmount =
                tempList[i].unitAmount*(tempList[i].productQuantity);
                return;
            }
            else {
              undoBool=1;
              showUndo(i);
              console.log("product deleted");
              tempList.splice(i,1);
            }
        }
    }
}


function showUndo(i) {
  parentDiv.html("");
  let currentProductsList = JSON.parse(localStorage.getItem('currentProducts'));
  for (let j = 0; j < currentProductsList.length; j++) {
    if (j!=i){
      let curData = currentProductsList[j];
      let curHtml = template(curData);
      parentDiv.append(curHtml);
      }
      else{
        let curData = currentProductsList[j];
        let curHtml = undotemplate(curData);
        parentDiv.append(curHtml);
      }
  }
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

//Helper method to delete an item
function deleteItemFromStorage(id, tmpList) {
    for (let i = 0; i < tmpList.length; i++) {
        let prod = tmpList[i];
      }
    }

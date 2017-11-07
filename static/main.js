//compile the template
var source = $("#list-item-template").html();
var template = Handlebars.compile(source);

var parentDiv = $("#templatedLists");

var savedShoppingProductsList = JSON.parse(localStorage.getItem('shoppingHistoryProducts'));
for (var i = 0; i < savedShoppingProductsList.length; i++) {
  //var curData = shoppingHistoryProducts[i];
  currentProducts.push(savedShoppingProductsList[i]);
//  currentProducts[i].id = i.toString();
  var curData = currentProducts[i];
  var curHtml = template(curData);
  parentDiv.append(curHtml);
}

function addItem(i){
    console.log('add item:',i);
    var savedShoppingProductsList = JSON.parse(localStorage.getItem('shoppingHistoryProducts'));
    var prodQuantity = savedShoppingProductsList[i].productQuantity;
    alert("Quantity updated: "+prodQuantity);
    savedShoppingProductsList[i].productQuantity = savedShoppingProductsList[i].productQuantity + 1;
    localStorage.setItem('shoppingHistoryProducts',JSON.stringify(savedShoppingProductsList));
    
    // TODO: The localStorage is updated. The page should refresh to show the updated changes
}

function removeItem(id){
    console.log('remove id:',id);
    var savedShoppingProductsList = JSON.parse(localStorage.getItem('shoppingHistoryProducts'));
    deleteItemFromStorage(id, savedShoppingProductsList);
    localStorage.setItem('shoppingHistoryProducts',JSON.stringify(savedShoppingProductsList));
}

function deleteItemFromStorage(id, savedShoppingProductsList) {
    for(var i = 0; i < savedShoppingProductsList.length; i++) {
        var prod = savedShoppingProductsList[i];
        if(prod.id == id) {
            var prodTitle = savedShoppingProductsList[i].productTitle;
            alert("Deleting "+prodTitle+" ...");
            delete savedShoppingProductsList[i];
            savedShoppingProductsList.splice(i,1);
            return;
        }
    }
}

//Removes or adds the item for now
$("ul").on("click", "i", function(e) {
    console.log('click');
    e.preventDefault();
    if(this.className==="arrow left") {
        $(this).parent().remove();
    } else if(this.className==="arrow right") {
//        alert("Quantity update noted!");
    }
});

//compile the template
var source = $("#list-item-template").html();
var template = Handlebars.compile(source);

var parentDiv = $("#templatedLists");

//start with a simple template
/**var html = template(simpleData); //fill out simpleData
console.log(html);
parentDiv.append(html);**/

var savedShoppingProductsList = JSON.parse(localStorage.getItem('shoppingHistoryProducts'));
for (var i = 0; i < savedShoppingProductsList.length; i++) {
  //var curData = shoppingHistoryProducts[i];
  currentProducts.push(savedShoppingProductsList[i]);
  currentProducts[i].id = "elem"+i.toString();
  var curData = currentProducts[i];
  var curHtml = template(curData);
  parentDiv.append(curHtml);
}

function addItem(){
    var ul = document.getElementById("productlist");
    //TODO: update text on list item
}

function removeItem(){
    var elem = document.getElementById("productlist");
    //TODO: remove node from list
}

//Removes or adds the item for now
$("ul").on("click", "i", function(e) {
    e.preventDefault();
    if(this.className==="arrow left") {
        $(this).parent().remove();
    } else if(this.className==="arrow right") {
        alert("Quantity update noted!");
    }
});

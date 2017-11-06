var source = $("#conf-item-template").html();
var template = Handlebars.compile(source);
var parentDiv = $("#templatedConfs");

var savedShoppingProductsList = JSON.parse(localStorage.getItem('shoppingHistoryProducts'));

for (var i = 0; i < savedShoppingProductsList.length; i++) {
  //var curData = shoppingHistoryProducts[i];
  //currentProducts.push(shoppingHistoryProducts[i]);
  //currentProducts[i].id = "elem"+i.toString();
  var curData = savedShoppingProductsList[i];
  var curHtml = template(curData);
  parentDiv.append(curHtml);
}

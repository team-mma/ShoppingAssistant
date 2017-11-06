var source = $("#conf-item-template").html();
var template = Handlebars.compile(source);
var parentDiv = $("#templatedConfs");

for (var i = 0; i < shoppingHistoryProducts.length; i++) {
  //var curData = shoppingHistoryProducts[i];
  //currentProducts.push(shoppingHistoryProducts[i]);
  //currentProducts[i].id = "elem"+i.toString();
  var curData = shoppingHistoryProducts[i];
  var curHtml = template(curData);
  parentDiv.append(curHtml);
}

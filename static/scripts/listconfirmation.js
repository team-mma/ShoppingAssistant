var source = $("#conf-item-template").html();
var template = Handlebars.compile(source);
var parentDiv = $("#templatedConfs");

$(document).ready(function(){
    var savedShoppingProductsList = JSON.parse(localStorage.getItem('shoppingHistoryProducts'));

    for (var i = 0; i < savedShoppingProductsList.length; i++) {
      var curData = savedShoppingProductsList[i];
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }
});


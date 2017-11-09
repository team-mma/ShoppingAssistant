let source = $("#conf-item-template").html();
let template = Handlebars.compile(source);
let parentDiv = $("#templatedConfs");

$(document).ready(function () {
    let savedShoppingProductsList = JSON.parse(localStorage.getItem('shoppingHistoryProducts'));

    for (let i = 0; i < savedShoppingProductsList.length; i++) {
        let curData = savedShoppingProductsList[i];
        let curHtml = template(curData);
        parentDiv.append(curHtml);
    }
});


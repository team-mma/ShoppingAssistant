let source = $("#conf-item-template").html();
let template = Handlebars.compile(source);
let parentDiv = $("#templatedConfs");

$(document).ready(function () {
    let tempList = JSON.parse(localStorage.getItem('currentProducts'));

    for (let i = 0; i < tempList.length; i++) {
        let curData = tempList[i];
        let curHtml = template(curData);
        parentDiv.append(curHtml);
    }
});

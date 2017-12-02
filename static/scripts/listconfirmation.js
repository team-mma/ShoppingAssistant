let source = $("#conf-item-template").html();
let template = Handlebars.compile(source);
let parentDiv = $("#templatedConfs");

let source2 = $("#conf-summary-template").html();
let template2 = Handlebars.compile(source2);
let parentDiv2 = $("#confSummary");

context = {text: "Order total:", totalCost: 0};

$(document).ready(function () {

    if (localStorage.getItem('user') == 'null') {
      window.location.pathname = '/index.html'
    }
    
    var showAlternate = localStorage.getItem('showAlternate');
    console.log('showAlternate',showAlternate);
    
    if(showAlternate == 'true') {
        $('#back_button').attr('href','main2.html');
    } else {
        $('#back_button').attr('href','main.html');
    }
    
    
    let tempList = JSON.parse(localStorage.getItem('currentProducts'));

    for (let i = 0; i < tempList.length; i++) {
        context.totalCost = context.totalCost + Number(tempList[i].productCost);
        tempList[i].productCost= Number(tempList[i].productCost).toFixed(2);
        let curData = tempList[i];
        let curHtml = template(curData);
        parentDiv.append(curHtml);
    }
    console.log(context);
    console.log(context.totalCost);
    context.totalCost = Number(context.totalCost).toFixed(2);
    let summaryHtml = template2(context);
    parentDiv2.append(summaryHtml);
});

function logout() {
  localStorage.setItem('user',null);
  localStorage.setItem('password',null);
  console.log("logout: user and pw set to null");
}

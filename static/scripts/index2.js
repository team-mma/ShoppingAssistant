// Saving the initial shopping history product list into the localStorage, if it has not been saved already
$(document).ready(function () {
    // TODO: Use showAlternate to link back buttons in other pages
    localStorage.setItem('showAlternate',"true")
    localStorage.setItem('storeProducts',JSON.stringify(storeProducts));
    //TODO later. add condition so that shopping history products will be based on past history
    
    localStorage.setItem('user','Larry');
    localStorage.setItem('password','12345');
    localStorage.setItem('shoppingHistoryProducts',JSON.stringify(shoppingHistoryProducts[0]));
    localStorage.setItem('currentProducts',JSON.stringify(shoppingHistoryProducts[0]));
});

function login() {
    var x = document.getElementById("frm1");
    var name = "";
    var password = "";
    name += x.elements[0].value;
    password += x.elements[1].value;
    console.log(name);
    console.log(password);
    if (("Larry").valueOf() === name.valueOf() && ("12345").valueOf() === password.valueOf()) {
      localStorage.setItem('user',name);
      localStorage.setItem('password',password);
      localStorage.setItem('shoppingHistoryProducts',JSON.stringify(shoppingHistoryProducts[0]));
      localStorage.setItem('currentProducts',JSON.stringify(shoppingHistoryProducts[0]));
      window.location.href = '../pages/main2.html'
    }
    else if (("Lucy").valueOf() === name.valueOf() && ("6789").valueOf() === password.valueOf()) {
      localStorage.setItem('user',name);
      localStorage.setItem('password',password);
      localStorage.setItem('shoppingHistoryProducts',JSON.stringify(shoppingHistoryProducts[1]));
      localStorage.setItem('currentProducts',JSON.stringify(shoppingHistoryProducts[1]));
      window.location.href = '../pages/main2.html';
    }
    else {
      alert("Invalid login: Try Larry 12345 or Lucy 6789");
    }
}

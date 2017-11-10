// Saving the initial shopping history product list into the localStorage, if it has not been saved already
$(document).ready(function () {

    localStorage.setItem('storeProducts',JSON.stringify(storeProducts));
    localStorage.setItem('shoppingHistoryProducts',JSON.stringify(shoppingHistoryProducts));
    localStorage.setItem('currentProducts',JSON.stringify(shoppingHistoryProducts));
});

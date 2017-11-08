// Saving the initial shopping history product list into the localStorage, if it has not been saved already
$(document).ready(function () {
    var savedShoppingHistoryProducts = JSON.parse(localStorage.getItem('shoppingHistoryProducts'));
    if (savedShoppingHistoryProducts === null)
        localStorage.setItem('shoppingHistoryProducts', JSON.stringify(shoppingHistoryProducts));
});

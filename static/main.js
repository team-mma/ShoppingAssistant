function addItem(){
    var ul = document.getElementById("productlist");
    //TODO: update text on list item
}

function removeItem(){
    var ul = document.getElementById("productlist");
    //TODO: remove node from list
}

//Removes the item for now
$("ul").on("click", "i", function(e) {
    e.preventDefault();
    if(this.className==="arrow left") {
        $(this).parent().remove();
    } else if(this.className==="arrow right") {
        alert("Quantity update noted!");
    }
});

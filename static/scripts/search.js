//go to login page if the user is not defined
$(document).ready(function () {
    console.log('user',localStorage.getItem('user'));
    if (localStorage.getItem('user') === 'null') {
      window.location.pathname = '/index.html'
    }
});

//compile the template
let source = $("#list-item-template").html();
let template = Handlebars.compile(source);

let parentDiv = $("#templatedLists");
let heading = $("#heading");

word = ""

<!-- HTML5 Speech Recognition API -->
function startDictation() {
    document.getElementById('transcript').value = "Listening...";
    if (window.hasOwnProperty('webkitSpeechRecognition')) {

        let recognition = new webkitSpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.lang = "en-US";
        recognition.start();

        recognition.onresult = function (e) {
            word = e.results[0][0].transcript;
            document.getElementById('transcript').value = word;
            recognition.stop();
            searchWord();
        };

        recognition.onerror = function (e) {
            recognition.stop();
        }

    }
}

function displayShoppingList(){
    console.log('displayShoppingList word',word);
    parentDiv.html("");
    console.log('parent div c1:',parentDiv.length);
    let tempList = JSON.parse(localStorage.getItem('currentProducts'));
    
    // This is a local var to count the number of matching products
    count = 0;
    
    for(let i = 0; i < storeProducts.length; i++) {
        let product = storeProducts[i];
        if(product.productTitle.toLowerCase().includes(word.toLowerCase())) {
            console.log(product.productTitle);
            // Display the product only if it is not already added in the currentProductList
            if(!contains(i,tempList)) {
                let curHtml = template(product);
                parentDiv.append(curHtml);
                count++;
            }
        }
    }
    if(count == 0)
    parentDiv.text('No Items Found!');
}

// Search the given word in the store database and display the results
function searchWord() {
    console.log('word searched: ',word);
    word = word;
    displayShoppingList();
}

//Add an item in current products, if it is not already added
function addItem(id) {
    console.log('add id:', id);
    let prod = storeProducts[id];
    let tempList = JSON.parse(localStorage.getItem('currentProducts'));
    if(contains(id,tempList))
        alert(prod.productTitle+" is already added");
    else {
        tempList.push(prod);
        alert(prod.productTitle+" added");
    }

    localStorage.setItem('currentProducts', JSON.stringify(tempList));
    displayShoppingList()
}

// Helper method to check if a prod is already present in the list
function contains(id, tempList) {
    for (let i = 0; i < tempList.length; i++) {
        let prod = tempList[i];
        if(prod.id === id)
            return true;
    }
    return false;
}

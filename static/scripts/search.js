//compile the template
let source = $("#list-item-template").html();
let template = Handlebars.compile(source);

let parentDiv = $("#templatedLists");

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
            searchWord(word);
        };

        recognition.onerror = function (e) {
            recognition.stop();
        }

    }
}

// Search the given word in the store database and display the results
function searchWord(word) {
    console.log('word searched: ',word);
    parentDiv.html("");
    let tempList = JSON.parse(localStorage.getItem('currentProducts'));
    for(let i = 0; i < storeProducts.length; i++) {
        let product = storeProducts[i];
        if(product.productTitle.toLowerCase().includes(word.toLowerCase())) {
            console.log(product.productTitle);
            // Display the product only if it is not already added in the currentProductList
            if(!contains(i,tempList)) {
                let curHtml = template(product);
                parentDiv.append(curHtml);
            }
            
        }
    }
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
//    increaseQuantity(id, tempList);
//    localStorage.setItem('currentProducts', JSON.stringify(tempList));
//    let curData = tempList[id];
//    let curHtml = template(curData);
//    document.getElementById(id).innerHTML = curHtml;
}

// Helper method to check if a prod is already present in the list
function contains(id, tempList) {
    for (let i = 0; i < tempList.length; i++) {
        let prod = tempList[i];
        if(prod.id == id)
            return true;
    }
    return false;
}
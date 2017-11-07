<!-- HTML5 Speech Recognition API -->
function startDictation() {
    document.getElementById('transcript').value = "Listening...";

    if (window.hasOwnProperty('webkitSpeechRecognition')) {

        var recognition = new webkitSpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.lang = "en-US";
        recognition.start();

        recognition.onresult = function (e) {
            word = e.results[0][0].transcript;
            document.getElementById('transcript').value = word;
            recognition.stop();
            searchWord(word);
//            document.getElementById('labnol').submit();
        };

        recognition.onerror = function (e) {
            recognition.stop();
        }

    }
}

function searchWord(word) {
    console.log('word searched: ',word);
    for(var i = 0; i < shoppingHistoryProducts.length; i++) {
        var product = shoppingHistoryProducts[i];
        if(product.productTitle.toLowerCase().includes(word.toLowerCase())) {
            console.log(product.productTitle);
        }
    }
}
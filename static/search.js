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
            document.getElementById('transcript').value = e.results[0][0].transcript;
            recognition.stop();
            document.getElementById('labnol').submit();
        };

        recognition.onerror = function (e) {
            recognition.stop();
        }

    }
}
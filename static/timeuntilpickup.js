$('#timer').click(changeText);

function changeText() {
    $(this).text("Changed text");
}

var remainingTime = 14 * 60;
$(document).ready(function () {
    setInterval(function () {
        remainingTime -= 1;
        var mins = parseInt(remainingTime / 60);
        var sec = remainingTime % 60;
        document.getElementById('timer').innerHTML = 'Your cart will be ready in ' + mins + 'm ' + sec + 's';
    }, 1000);
});
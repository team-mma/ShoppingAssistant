$('#timer').click(changeText);

function changeText() {
    $(this).text("Changed text");
}

let remainingTime = 14 * 60;
$(document).ready(function () {
    setInterval(function () {
        remainingTime -= 1;
        const mins = parseInt(remainingTime / 60);
        const sec = remainingTime % 60;
        document.getElementById('timer').innerHTML = 'Your cart will be ready in ' + mins + 'm ' + sec + 's';
    }, 1000);
});
let remainingTime = 14 * 60;

$(document).ready(function () {
  if (localStorage.getItem('user') === 'null') {
    window.location.pathname = '/index.html'
  }
    var showAlternate = localStorage.getItem('showAlternate');
    console.log('showAlternate',showAlternate);

    if(showAlternate == 'true') {
        $('#back_button').attr('href','main2.html');
    } else {
        $('#back_button').attr('href','main.html');
    }

    setInterval(function () {
        remainingTime -= 1;
        const mins = parseInt(remainingTime / 60);
        const sec = remainingTime % 60;
        document.getElementById('timer').innerHTML = mins + 'm ' + sec + 's';
    }, 1000);
});

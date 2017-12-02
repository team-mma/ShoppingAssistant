$(document).ready(function() {
    var showAlternate = localStorage.getItem('showAlternate');
    console.log('showAlternate',showAlternate);
    
    if(showAlternate == 'true') {
        $('#back_button').attr('href','main2.html');
    } else {
        $('#back_button').attr('href','main.html');
    }
});

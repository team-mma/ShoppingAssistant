$('#timer').click(changeText);
function changeText(event) {
 $(this).text("Changed text");
};

remainingTime = 15*60;
$(document).ready(function(){
    setInterval(function(){
        remainingTime -= 1;
        mins = parseInt(remainingTime/60);
        sec = remainingTime % 60;
        document.getElementById('timer').innerHTML = 'Your cart will be ready in '+mins+'m '+sec+'s';
    },1000);
});
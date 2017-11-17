$(document).ready(function () {
    if (localStorage.getItem('user') == 'null') {
      window.location.pathname = '/index.html'
    }
});

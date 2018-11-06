window.onload = function() {
    var bomb = document.getElementById('bomb');
    var contentArea = document.getElementById('contentArea');

    bomb.onclick = function() {
        contentArea.classList.add('blowing');
}
}
function updateLoadingBar(percentComplete) {
    document.getElementById('loadingBar').style.width = percentComplete + '%';
}

window.onload = function() {
    // Hide or fade out the loading bar
    document.getElementById('loadingBar').style.opacity = 0;
};
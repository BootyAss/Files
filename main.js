function f() {
    preloader.style.display = 'none';
    content.style.display = 'inline';
}

window.onload = function () {
    let preloader = document.getElementById('preloader');
    let content = document.getElementById('content');
    content.style.display = 'none';
    setTimeout(f, 750);
}
function f() {
    preloader.style.display = 'none';
    content.style.display = 'inline';
}

window.onload = function () {
    let content = document.getElementById('content');
    content.style.display = 'none';
    let preloader = document.getElementById('preloader');
    setTimeout(f, 750);
}

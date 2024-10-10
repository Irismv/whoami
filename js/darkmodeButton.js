/**
 *
 * changing mode and saving it
*/
function changeMode() {
    const stylesheet = document.getElementById('lightDarkMode');
    if (stylesheet.getAttribute('href') === '../css/main.css') {
        stylesheet.setAttribute('href', '../css/main2.css');
        localStorage.setItem('mode', 'dark');  // Save mode to localStorage
    } else {
        stylesheet.setAttribute('href', '../css/main.css');
        localStorage.setItem('mode', 'light');  // Save mode to localStorage
    }
}
/**
 *
*checks the saved mode
*/
function checkMode() {
    const savedMode = localStorage.getItem('mode');
    const stylesheet = document.getElementById('lightDarkMode');

    if (savedMode === 'dark') {
        stylesheet.setAttribute('href', '../css/main2.css');
    } else {
        stylesheet.setAttribute('href', '../css/main.css');
    }
}
console.log(localStorage.getItem('mode'));
document.addEventListener("DOMContentLoaded", function () {
    checkMode();          // Dark mode function
});

// SO naar homie Gijs :salute:
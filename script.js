const html = document.querySelector('html');
const heading = document.querySelector('h5');

html.addEventListener('mousemove', runEvent);


function runEvent(e) {
    html.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}


let lock = document.querySelector('.padlock');
let area = document.querySelector('p');

lock.addEventListener('mouseenter', () => {

    // area.style.display = "block";
    area.className = 'text text_visible';


});

lock.addEventListener('mouseleave', () => {

    // area.style.display = "none";
    area.className = 'text';


});
lock.addEventListener('click', () => {

    // area.style.display = "none";
    // area.className = 'text text_visible';
    area.style.visibility = "visible";


});
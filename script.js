const changeBtn = document.querySelector('#change-button');
const hexCode = document.querySelector('#hex');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let newHex = '#';
let randomNo;

function newColor() {
    randomNo = Math.floor(Math.random() * hex.length);
    for (let i = 0; i < 6; i++) {
        newHex += hex[randomNo];
        randomNo = Math.floor(Math.random() * hex.length);
    }
}
newColor();

changeBtn.addEventListener('click', () => {
    changeBtn.style.backgroundColor = newHex;
    document.querySelector('body').style.backgroundColor = newHex;
    hexCode.textContent = newHex;
    newHex = '#';
    newColor();
});
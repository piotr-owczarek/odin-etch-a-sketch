const grid = document.querySelector('.grid');
const colorPicker = document.getElementById('color-picker');
const sizePicker = document.getElementById('size-picker');
const clearButton = document.getElementById('clear-button');
let color = colorPicker.value;
let size = 32;
let mouseDown = false;
grid.style.cssText = `grid-template-columns: repeat(${size}, 1fr);`;

function changeColor() {
    if (!mouseDown) return;
    this.style.cssText = `background: ${color};`;
}

function createGrid(){
    grid.replaceChildren();
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', changeColor);
        grid.appendChild(cell);
    }
}

colorPicker.addEventListener('change', () => {
    color = colorPicker.value;
})

sizePicker.addEventListener('change', () => {
    size = sizePicker.value;
    createGrid();
    grid.style.cssText = `grid-template-columns: repeat(${size}, 1fr);`;
})

document.body.addEventListener('mousedown', () => mouseDown = true);
document.body.addEventListener('mouseup', () => mouseDown = false);
clearButton.addEventListener('click', createGrid);
createGrid();
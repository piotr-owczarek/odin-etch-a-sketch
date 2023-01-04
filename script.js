let rows = 10;
const container = document.querySelector('.container');

for (let i = 0; i < rows*rows; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
}

container.style.cssText = `grid-template-columns: repeat(${rows}, 1fr);`
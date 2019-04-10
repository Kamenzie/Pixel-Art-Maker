const color = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');
const input = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;
makeGrid(height, width);

// Select size input
input.addEventListener('submit', function (event) {
  event.preventDefault();
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  table.firstElementChild.remove();
  makeGrid(height, width);
});

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
// Your code goes here!
  for (let i = 0; i < height; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < width; j++) {
      let cell = row.insertCell(j);
// Select color input
      cell.addEventListener('click', function (event) {
        cell.style.backgroundColor = color.value;
      });
    }
  }
}

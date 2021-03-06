const sizeCheck = document.getElementById("sizePicker");
const canvas = document.getElementById("pixelCanvas");

sizeCheck.addEventListener("submit", function (evt) {
  evt.preventDefault();

  // get the height value from index.html and assign it to the height variable
  const height = document.getElementById("inputHeight").value;

  // get the width value from index.html and assign it to the width variable
  const width = document.getElementById("inputWidth").value;

  makeGrid(height, width);
});

// When size is submitted by the user, call makeGrid()
function makeGrid(h, w) {
  //Removing previous tables
  canvas.innerHTML = "";
  // create rows and cells
  for (let i = 0; i < h; i++) {
    //create table rows
    const row = canvas.insertRow(i);

    for (let j = 0; j < w; j++) {
      //create table celll/columns 
      const cell = row.insertCell(j);
    }
  }
}
canvas.addEventListener("click", function (evt) {
  evt.target.style.backgroundColor =
    document.getElementById("colorPicker").value;
});

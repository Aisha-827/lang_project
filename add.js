/*fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));

const data = json;*/
var rIndex,
  table = document.getElementById("table");

//check the empty input
function checkEmptyInput() {
  var isEmpty = false,
    fname = document.getElementById("fname").value,
    word = document.getElementById("word").value,
    definition = document.getElementById("definition").value;

  if (fname == "") {
    alert("First Name Cannot be Empty");
    isEmpty = true;
  } else if (word == "") {
    alert("Word Cannot be Empty");
    isEmpty = true;
  } else if (definition == "") {
    alert("Definition Cannot be Empty");
    isEmpty = true;
  }
  return isEmpty;
}

function addHtmlTableRow() {
  //get the table by id
  //create a new row and cells
  //get value from input text
  //set the value into row cell's
  if (!checkEmptyInput()) {
    var newRow = table.insertRow(table.length),
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      fname = document.getElementById("fname").value,
      word = document.getElementById("word").value,
      definition = document.getElementById("definition").value;

    cell1.innerHTML = fname;
    cell2.innerHTML = word;
    cell3.innerHTML = definition;

    //call the function to set the event to the new row
    selectedRowToInput();
  }
}

//display selected row data into input text
function selectedRowToInput() {
  for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      //get the selected row index
      rIndex = this.rowIndex;
      //console.log(rIndex);
      document.getElementById("fname").value = this.cells[0].innerHTML;
      document.getElementById("word").value = this.cells[1].innerHTML;
      document.getElementById("definition").value = this.cells[2].innerHTML;
    };
  }
}
selectedRowToInput();

function editHtmlTableSelectedRow() {
  var fname = document.getElementById("fname").value,
    word = document.getElementById("word").value,
    definition = document.getElementById("definition").value;
  if (!checkEmptyInput()) {
    table.rows[rIndex].cells[0].innerHTML = fname;
    table.rows[rIndex].cells[1].innerHTML = word;
    table.rows[rIndex].cells[2].innerHTML = definition;
  }
}

function removeSelectedRow() {
  table.deleteRow(rIndex);
  //clear input text
  document.getElementById("fname").value = "";
  document.getElementById("word").value = "";
  document.getElementById("definition").value = "";
}

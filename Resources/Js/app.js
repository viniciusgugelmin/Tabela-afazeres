// Variable declarations
var taskBox = document.querySelector('#txtTarefa');
var taskError = document.querySelector('#spnMensagem');
var table = document.querySelector('#tblBody');
var tableDayToDay = document.querySelector('#tblBodyDayToDay');
var cont = 1;
var contDayToDay = 1;
var list = [];
var listDayToDay = [];

/* COLLEGE */
//
//
//
//
// Render the table
function renderTable() {
  table.innerHTML = "";

  // Verify array
  for (t of list) {
    var row = table.appendChild(document.createElement('tr'));

    var delButton = createDelButton(t.id);

    row.insertCell().innerHTML = t.id;
    row.insertCell().innerHTML = t.name;
    row.appendChild(delButton);
  }
}
//
//
//
//
// Add a task
function addTask () {
  // Delete the blank spaces
  var taskValue = taskBox.value.trim();

  if (!taskValue) {
    taskError.innerHTML = "Digite o nome da tarefa";

  } else {
    var task = {
      id: cont,
      name: taskValue,
    };

    list.push(task);

    renderTable();

    cont++;
  }
}
//
//
//
//
// Delete a task
function delTask(id) {
  var index = list.findIndex(i => i.id == id);

  list.splice(index, 1);

  renderTable();
}
//
//
//
//
// Create a button delete
function createDelButton(id) {
  var delButton = document.createElement('button');
  delButton.appendChild(document.createTextNode('Remover'));
  delButton.setAttribute('class', 'btn btn-danger');
  delButton.setAttribute('onclick', `delTask(${id})`);

  return delButton;
}

/* DAY2DAY */
//
//
//
//
// Render the table
function rendertableDayToDay() {
  tableDayToDay.innerHTML = "";

  // Verify array
  for (t of listDayToDay) {
    var row = tableDayToDay.appendChild(document.createElement('tr'));

    var delButton = createDelButtonDayToDay(t.id);

    row.insertCell().innerHTML = t.id;
    row.insertCell().innerHTML = t.name;
    row.appendChild(delButton);
  }
}
//
//
//
//
// Add a task
function addtaskDayToDay () {
  // Delete the blank spaces
  var taskValueDayToDay = taskBox.value.trim();

  if (!taskValueDayToDay) {
    taskError.innerHTML = "Digite o nome da tarefa";

  } else {
    var taskDayToDay = {
      id: contDayToDay,
      name: taskValueDayToDay,
    };

    listDayToDay.push(taskDayToDay);

    rendertableDayToDay();

    contDayToDay++;
  }
}
//
//
//
//
// Delete a task
function delTaskDayToDay(id) {
  var index = listDayToDay.findIndex(i => i.id == id);

  listDayToDay.splice(index, 1);

  rendertableDayToDay();
}
//
//
//
//
// Create a button delete
function createDelButtonDayToDay(id) {
  var delButton = document.createElement('button');
  delButton.appendChild(document.createTextNode('Remover'));
  delButton.setAttribute('class', 'btn btn-danger');
  delButton.setAttribute('onclick', `delTaskDayToDay(${id})`);

  return delButton;
}

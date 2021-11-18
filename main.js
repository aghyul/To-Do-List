let addToDoBtn = document.getElementById('addToDo');
let inputField = document.getElementById('inputField');
let toDoContainer = document.getElementById('toDoContainer');

addToDoBtn.addEventListener('click', () => {
  var paragraph = document.createElement('div');
  paragraph.classList.add('paragraph-styling');
  toDoContainer.appendChild(paragraph);

  if(inputField.value === ""){
    toDoContainer.removeChild(paragraph);
  }else{
    paragraph.innerText = inputField.value;
    inputField.value = "";
  }
  paragraph.addEventListener('dblclick', () => {
    toDoContainer.removeChild(paragraph);
  });
});
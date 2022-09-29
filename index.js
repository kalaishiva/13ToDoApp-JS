//input text
let inputText = document.querySelector(".input");
console.log(inputText);

//add button
let addBtn = document.querySelector(".addButton");
console.log(addBtn);

//container
let contentContainer = document.querySelector(".container");
console.log(contentContainer);





addBtn.addEventListener('click', addContent);

function addContent() {


    //item
    let todoDiv = document.createElement('div');
    todoDiv.className = "item";

    //item_input
    let todoDivInput = document.createElement('div');
    todoDivInput.className = "item_input";


    let spanBtn = document.createElement('span');
    spanBtn.className = "btns";

    todoDivInput.appendChild(spanBtn);
    //console.log(spanBtn);

    //console.log(todoDivInput);

    //edit Button
    let editBtn = document.createElement('button');
    editBtn.innerHTML = "EDIT";
    editBtn.className = "editButton";
    todoDivInput.appendChild(editBtn);

    //delete Button
    let delBtn = document.createElement('button');
    delBtn.innerText = "DELETE";
    delBtn.className = "deleteButton";
    todoDivInput.appendChild(delBtn);

    contentContainer.append(todoDiv);
    todoDiv.append(todoDivInput);
    // todoDivInput.append(spanBtn);
    // todoDivInput.innerHTML = inputText.value;

    spanBtn.innerHTML = inputText.value;

    //todoDivInput.append(editBtn);
    //todoDivInput.append(delBtn);
    inputText.value = "";



}
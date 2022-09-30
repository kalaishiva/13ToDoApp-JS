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


//add button clicked
function addContent() {


    //item
    let todoDiv = document.createElement('div');
    todoDiv.className = "item";

    //item_input
    let todoDivInput = document.createElement('div');
    todoDivInput.className = "item_input";


    let spanText = document.createElement('span');
    spanText.className = "text";


    todoDivInput.append(spanText);

    spanText.innerHTML = inputText.value;
    //console.log(todoDivInput.value);



    let spanBtn = document.createElement('span');
    spanBtn.className = "btns";

    todoDivInput.appendChild(spanBtn);
    //console.log(spanBtn);


    //edit Button
    let editBtn = document.createElement('button');
    editBtn.innerHTML = "EDIT";
    editBtn.className = "editButton";
    spanBtn.appendChild(editBtn);

    //delete Button
    let delBtn = document.createElement('button');
    delBtn.innerText = "DELETE";
    delBtn.className = "deleteButton";
    spanBtn.appendChild(delBtn);

    contentContainer.append(todoDiv);
    todoDiv.append(todoDivInput);

    inputText.value = "";


    //delete btn
    delBtn.addEventListener('click', del);

    function del() {
        todoDiv.remove();

    }

    editBtn.addEventListener('click', editTodo);


    function editTodo(event) {

        inputText.value = spanText.innerHTML;
        spanText.innerHTML = del();
        spanText.innerHTML = inputText.value;


    }




}
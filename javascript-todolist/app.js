const input = document.getElementById('task');
const button = document.getElementById('todoBtn');
const deleteButton = document.getElementById('deleteBtn');
const ul = document.getElementById('list');

eventListeners();

function eventListeners() { // All event listeners are here
    button.addEventListener('click', addTodo);
    deleteButton.addEventListener('click', deleteAllTodos);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    ul.addEventListener('click', todoIsDone);
}



// Function for deleting all todos

function deleteAllTodos() {
    if (confirm("Are you sure you want to delete all")) {
        const clearListItems = document.querySelectorAll(".listItem");
        clearListItems.forEach(e => {
            e.remove();
        });
        localStorage.removeItem("todos");
    }
}



// Functions for adding todos

function addTodo() {
    const newTodo = input.value;
    if (input.value === '') {
        const liveToastError = document.getElementById('liveToastError');
        var toast = new bootstrap.Toast(liveToastError);
        toast.show();
    }
    else {
        addToUI(newTodo);
        addToLocalStorage(newTodo);
        const liveToast = document.getElementById('liveToast');
        var toast = new bootstrap.Toast(liveToast);
        toast.show();
    }
    input.value = '';
}

function addToUI(newTodo) {
    const li = document.createElement('li');
    li.className = "listItem";
    li.style.textDecoration = "none";
    li.textContent = newTodo;
    ul.appendChild(li);
}

function loadAllTodosToUI() {
    let todos = getFromStorage();

    todos.forEach(function (todo) {
        addToUI(todo);
    });
}

function getFromStorage() { // Need that function for adding todos to local storage and loading all todos to ui
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addToLocalStorage(newTodo) {
    let todos = getFromStorage();

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}



// Functions for marking todos as done or not done

function todoIsDone(e) {
    if (e.target.tagName === 'LI' && e.target.style.textDecoration === 'none') {
        if(confirm('Is it marked as done?')) {
            e.target.style.textDecoration ="line-through";
        }
    }
    else if (e.target.tagName ==='LI' && e.target.style.textDecoration === 'line-through') {
        if(confirm('Is it marked as not done?')) {
            e.target.style.textDecoration = "none";
        }
    }
}

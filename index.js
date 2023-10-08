let toDos = [];
let todoContainer = document.querySelector('#list-wrap');


const displayTodos = () => {
    let result = '';

    let todos = JSON.parse(localStorage.getItem('todos'))
    if(todos){
        toDos = todos
    }
    toDos.map((todo) => {
        result += `
        <li id='' class="list-item">
            <form id='' class='edit-todo' action="">
                <div class="label-wrap">
                    <label for="checkbox">
                        <input class="checkbox" type="checkbox" name="checkbox" id='checkbox'>
                    </label>
                    <label for='add-item'>
                        <input class="input" type="text" name="add-item" id='add-item' value="${todo.text}">
                    </label>
                </div>
                </form>
                <button id= class="drag">remove</button>
        </li>
        `
        return result;
    })
    todoContainer.innerHTML = result;
    return result;
}

let todo = {
    text: ''
}

let form = document.querySelector('.form');
let textInput = document.querySelector('#add-item');

const addTodo = () => {
   if(textInput.value.length !== 0){
    todo.text = textInput.value
    toDos.push(todo)
    textInput.value = ''
   }
   for(let i=0; i<toDos.length; i++){
    toDos[i].id = i + 1
   }
   localStorage.setItem('todos', JSON.stringify(toDos))
   console.log(toDos)
   displayTodos();
}


window.addEventListener('DOMContentLoaded', () => {
    displayTodos();
})
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    addTodo()
     
})
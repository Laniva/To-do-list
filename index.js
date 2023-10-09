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
                        <input onClick=showDeleteBtn(${todo.id}) class="checkbox" type="checkbox" name="checkbox" id=''>
                    </label>
                    <label for='add-item'> 
                        <input class="input" type="text" name="add-item" id='add-item' value="${todo.text}">
                    </label>
                </div>
                </form>
                <button onClick=editTodo(${todo.id}) id="" class="drag">edit</button>
                <button onClick=deleteTodo(${todo.id}) id="${todo.id}" class="drag hide">remove</button>
        </li>
        `
        return result;
    })
    todoContainer.innerHTML = result;
    return result;
}

let todo = {
    text: '',
    completed: false
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

const deleteTodo = (id) => {
    let todos = toDos.filter((item) => item.id !== id)
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log(todos);
    displayTodos()
    return todos;
}


const showDeleteBtn = (id) => {
    let deleteBtn = document.getElementById(id)
    let todo = toDos.find((todo) => todo.id === id)
    todo.completed = !todo.completed
    deleteBtn.classList.toggle('hide')
}

const editTodo = (id) =>{
    let editBtn = document.getElementById(id)
    let todo = toDos.find((todo) => todo.id === id)
    
}

const clearAll = () => {
    let todos = toDos.filter((todo) => todo.completed === false)
    localStorage.setItem('todos', JSON.stringify(todos))
    displayTodos()
    return todos;
}

window.addEventListener('DOMContentLoaded', () => {
    displayTodos();
})
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    addTodo()
     
})
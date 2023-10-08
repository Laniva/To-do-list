let toDos = [];
let todoContainer = document.querySelector('.list-container');


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
                        <input class="checkbox" type="checkbox" name="checkbox" id=''>
                    </label>
                    <label for=''>
                        <input class="input" type="text" name="add-item" id='' value="${todo.text}">
                    </label>
                </div>
                </form>
                <button id= class="drag">remove</button>
        </li>
        `
        todoContainer.innerHTML = result;
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
    console.log(todo)
   }
   for(let i=0; i<toDos.length; i++){
    toDos[i].id = i + 1
   }
   localStorage.setItem('todo', JSON.stringify(toDos))
   displayTodos();
}



form.addEventListener('submit', () =>{
    addTodo()
    displayTodos()
})
// selecting the required elements
function getById(id) {
    return document.getElementById(id)
}

const addBtn = getById('addNewBtn');
const newTaskInp = getById("newTaskInp")
const taskList = getById("task_list")



// add a click event to the add btn
// get the input value;
addBtn.addEventListener('click', function (e) {
    var taskName = newTaskInp.value;
    if (!taskName) {
        alert('Plz insert a task name')
        return;
    }
    newTaskInp.value = ''
    addNewItem(taskName)
})
//

function addNewItem(text) {
    const item = document.createElement('div')
    item.className = 'item'
    item.innerHTML =
        `<li>${text}</li>
    <button class = "edit" > <i class = "fas fa-pen" > </i></button>
    <button class = "completed" > <i class = "fas fa-check" > </i></button>
     <button class = "delete" > <i class = "fas fa-trash-can" > </i></button>`

    taskList.appendChild(item)
}

taskList.addEventListener("click", function (event) {

    if (event.target.className == "delete") {

        deleteItem(event)

    } else if (event.target.className == "completed") {

        completeTask(event)

    } else if (event.target.className == "edit") {

        editTaskName(event)
    }


})


function deleteItem(event) {
    event.target.parentElement.remove()
}

function completeTask(event) {
    const li = event.target.parentElement.firstElementChild;
    li.classList.toggle('completed-task')
}

function editTaskName(event) {
    const li = event.target.parentElement.firstElementChild;
    const previousText = li.innerText;
    li.innerHTML = ''

    // creating an input filed
    const input = document.createElement('input')
    input.type = 'text';
    input.value = previousText;
    input.addEventListener('keypress', function (e) {
        if (e.key == "Enter") {
            const modifiedName = e.target.value;
            li.innerHTML = ''
            li.innerText = modifiedName;
            event.target.style.display = 'inline'
        }

    })


    li.appendChild(input);
    event.target.style.display = 'none'
}
let todoInput = document.querySelector('#todoInput'); //INPUT
let addTask = document.querySelector('#addTask'); //BUTTON
let taskList = document.querySelector('#taskList'); //UL


addTask.addEventListener ('click', () =>{
    if  (todoInput.value) {
        let inputValue = document.createTextNode(todoInput.value); //value of the input field
        let newTask = document.createElement('li'); //new element 'li'
        newTask.appendChild(inputValue); // to input the value to LI
        taskList.appendChild(newTask); // new LI to UL

        // Add an click event listener to each li element.
        newTask.addEventListener('click', ()=>{
            newTask.classList.toggle("taskComplete");
        })
        // Add a delete button (X) next to each task when it's created.
        let delBttn = document.createElement('button'); 
        let Xbttn = document.createTextNode('x');
        delBttn.appendChild(Xbttn);
        newTask.appendChild(delBttn);

        // Add a click event listener to this button.
        delBttn.addEventListener('click', ()=>{

        // When the delete button is clicked, remove the parent li element from the taskList.
            taskList.removeChild(newTask);
        })
        //empty input
        todoInput.value = '';

    }
    // alert or a warning message.
    else {
        alert('Write task please.')
    }
});





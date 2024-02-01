function addTask(){
    let todoInput = document.getElementById('todoInput')
    let todoText = todoInput.value;
    if(todoText === ''){
        alert("Please enter a valid task!")
        return
    }
    let todoList = document.getElementById('todoList')

    let li = document.createElement('li')
    li.classList.add('todo-item');

    let span = document.createElement('span');
    span.textContent=todoText;


//    delete button
     let deletebtn = document.createElement('i')
     deletebtn.setAttribute('class','fa-solid fa-trash delete-btn')
     deletebtn.onclick = function(){
        li.remove()
     }

    // Edit btn

    let editbtn = document.createElement('i')
    editbtn.setAttribute('class','fa-solid fa-pen-to-square edit-btn')
    editbtn.onclick=function () {
        let editPromt = prompt("please Enter the updated task",span.textContent)
        span.textContent=editPromt;
    }


    li.appendChild(span)
    li.appendChild(deletebtn)
    li.appendChild(editbtn)
    todoList.appendChild(li)

    todoInput.value = '';
}
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const listItem = document.querySelector('#list-ul');

const storedItem = localStorage.getItem("todoList");

if(storedItem) {
    listItem.innerHTML = storedItem;
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    if(input.value.length > 1){
        const li = document.createElement("li");
        const listText = ` <input type="checkbox" class="done" />
                           <span class="name">${input.value}</span>
                           <span class="icons"><i class="fa fa-trash delete" ></i></span>
                           `;
        li.innerHTML = listText;  
        listItem.appendChild(li)   
        input.value = "";
    }

    localStorage.setItem("todoList", listItem.innerHTML);
});

listItem.addEventListener('click', function(event){
    if(event.target.classList.contains("done") && event.target.checked == true){
        event.target.parentElement.classList.add('complete');
    }

    if(event.target.classList.contains("done") && event.target.checked == false){
        event.target.parentElement.classList.remove('complete');
    }

    if(event.target.classList.contains("fa")){
        if(confirm("This item will be deleted")){
            listItem.removeChild(event.target.parentElement.parentElement); 
        }  
    }
    localStorage.setItem("todoList", listItem.innerHTML);
});



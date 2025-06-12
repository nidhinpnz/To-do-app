const task= document.getElementById("task");
const list = document.getElementById("list");
const click = document.getElementById("click");
const intro=document.getElementById("intro");
const name=prompt("whats your name");
intro.innerText = "hello " + name + " here is your To do List";
click.addEventListener("click",event=>{
    const addtask= task.value.trim();
    if(addtask!==""){
        const taskItem = document.createElement("li");
        taskItem.innerText = addtask;

        const deleteButton= document.createElement("button");
        deleteButton.innerText="X";
          deleteButton.style.marginLeft = "10px";

        deleteButton.addEventListener("click",event=>{
            taskItem.remove();
            
            
        });
    taskItem.appendChild(deleteButton);
        list.appendChild(taskItem);
    
        
        task.value="";
    }
    else{
        alert("Enter the task!");
    }
    
});

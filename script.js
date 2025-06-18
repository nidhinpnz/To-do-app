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
        const checkbox = document.createElement("input");

        checkbox.type="checkbox";
        checkbox.style.marginRight="10px";
        checkbox.style.transform = "scale(1.5)"; 
        checkbox.style.verticalAlign = "middle";  

        taskItem.innerText = addtask;

        const deleteButton= document.createElement("button");
        deleteButton.innerText="X";
          deleteButton.style.marginLeft = "10px";

        deleteButton.addEventListener("click",event=>{
            taskItem.remove();
            
            
        });
        checkbox.addEventListener("change", event=>{
                if(checkbox.checked){
                    taskItem.style.textDecoration="line-through";
                    taskItem.style.color=" beige";
                }
                else{
                    taskItem.style.textDecoration="none";
                    taskItem.style.color="white";
                }
        });
        
    taskItem.appendChild(deleteButton);
     taskItem.appendChild(checkbox);
        list.appendChild(taskItem);
      
     
        
        task.value="";
    }
    else{
        alert("Enter the task!");
    }
    
});

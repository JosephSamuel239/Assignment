let tasks =
JSON.parse(
localStorage.getItem("tasks")
) || [];

renderTasks();
function addTask(){
    const input =
    document.getElementById("taskInput");
    if(input.value.trim()==="")
        return;
    tasks.push({
        text:input.value,
        completed:false
    });

    saveTasks();

    input.value="";

    renderTasks();
}
function toggleTask(index){
    tasks[index].completed =
    !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function deleteTask(index){
    tasks.splice(index,1);
    saveTasks();
    renderTasks();
}
function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function renderTasks(){

    const list =
    document.getElementById("taskList");
    list.innerHTML="";
    tasks.forEach((task,index)=>{
        list.innerHTML += `
        <li>
            <span
            style="
            text-decoration:
            ${task.completed
            ? "line-through"
            : "none"}
            "
            onclick="toggleTask(${index})"
            >
            ${task.text}
            </span>
            <button
            onclick="deleteTask(${index})"
            >
            Delete
            </button>
        </li>
        `;
    });
}
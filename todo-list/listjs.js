const todoInput = document.querySelector("#todolist_input");
const todoAddBtn = document.querySelector(".add_btn");
const body = document.body;

todoAddBtn.addEventListener("click", () => {
    const inputValue = todoInput.value;
    const todolistUl = document.querySelector(".todo_list");
    const li = document.createElement("li");
    const liInnerHtml = `
        <div>${inputValue}</div>
        <div>
            <button class="done">done</button>
            <button class="remove">remove</button>
        </div>
    `;
    li.innerHTML = liInnerHtml;

    if (inputValue === "") {
        alert("Please add a task");
    } else {
        todolistUl.append(li);
    }
});

body.addEventListener("click", (eventObject) => {
    if (eventObject.target.classList.contains("done")) {
        const todoTask = eventObject.target.parentElement.previousElementSibling;
        todoTask.style.textDecoration = "line-through";
        todoTask.style.color = "hsla(57, 88%, 86%, 0.6)";
    }
    if (eventObject.target.classList.contains("remove")) {
        const removeTodoTask = eventObject.target.parentElement.parentElement;
        removeTodoTask.remove();
    }
});
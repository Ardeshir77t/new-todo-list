const AddButton = document.querySelector(`.add-button`);
const inputBox = document.querySelector(`.input-box`);
let newTaskDiv = document.querySelector(`.tasks`);
let totalTasks = document.querySelector(`.total-tasks`);
let taskNo = 0;

getData();
function getData() {
  newTaskDiv.innerHTML = localStorage.getItem(`data1`);
  totalTasks.innerHTML = localStorage.getItem(`data2`);
  taskNo = Number(localStorage.getItem(`data3`));

  //console.log(newTaskDiv);
}
function saveData() {
  localStorage.setItem(`data1`, newTaskDiv.innerHTML);
  localStorage.setItem(`data2`, totalTasks.innerHTML);
  localStorage.setItem(`data3`, taskNo);
}

function createTodo() {
  if (inputBox.value.trim() === "") {
    alert(`write something `);
  } else {
    taskNo = taskNo + 1;
    newTaskDiv.innerHTML += `<div class="new-tasks"><span class="task-span">${inputBox.value}</span><button class="delete-button"><img src="image/icons8-bin-24.png"></button></div>`;
    totalTasks.innerHTML = `<div class="total-task-div"><span class="total-task-span">you have ${taskNo} peneding task</span><button class="total-task-button"><img class="total-task-img" src="image/icons8-bin-24.png"></button></div>`;

    inputBox.value = "";
    saveData();
  }
}
newTaskDiv.addEventListener(`click`, (e) => {
  if (e.target.tagName === `IMG` || e.target.tagName === `BUTTON`) {
    let currentTask = document.querySelectorAll(`.delete-button`);

    for (let i = 0; i < currentTask.length; i = i + 1) {
      currentTask[i].onclick = function () {
        taskNo = taskNo - 1;
        if (taskNo === 0) {
          taskNo = 0;
          newTaskDiv.innerHTML = "";
          totalTasks.innerHTML = "";
          saveData();
        } else {
          taskNo = taskNo;
          currentTask[i].parentNode.remove();

          totalTasks.innerHTML = `<div class="total-task-div"><span class="total-task-span">you have ${taskNo} peneding task</span><button class="total-task-button"><img class="total-task-img" src="image/icons8-bin-24.png"></button></div>`;
          saveData();
        }
      };
    }

    let tasks = document.querySelectorAll(`.task-span`);

    for (let i = 0; i < tasks.length; i = i + 1) {
      //just for testing console.log(this);
      // console.log(tasks[i]);
      //console.log(tasks[0]);
      tasks[i].onclick = function () {
        this.classList.toggle(`completed`);
        //tasks.classList.toggle(`compeleted`);saveData()
      };
    }
  }
});
totalTasks.addEventListener(`click`, (e) => {
  if (e.target.tagName === `IMG`) {
    let totalTaskButton = document.querySelector(`.total-task-button`);

    newTaskDiv.innerHTML = "";
    //this code wont work beacuse the parent element for img is the button not the div e.target.parentElement.remove();
    totalTaskButton.parentElement.remove();
    taskNo = 0;
    saveData();
  } else if (e.target.tageName === `BUTTON`) {
    e.target.parentElement.remove();
    newTaskDiv.innerHTML = "";
    taskNo = 0;
    saveData();
  }
});

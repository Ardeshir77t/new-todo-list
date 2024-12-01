const AddButton = document.querySelector(`.add-button`);
const inputBox = document.querySelector(`.input-box`);
let newTaskDiv = document.querySelector(`.tasks`);

getData();
function getData() {
  newTaskDiv.innerHTML = localStorage.getItem(`data1`);
  console.log(newTaskDiv);
}
function saveData() {
  localStorage.setItem(`data1`, newTaskDiv.innerHTML);
}

AddButton.onclick = function () {
  if (inputBox.value.trim() === "") {
    alert(`write something `);
  } else {
    console.log(inputBox.value);
    newTaskDiv.innerHTML += `<div class="new-tasks"><span class="task-span">${inputBox.value}</span><button class="delete-button"><img src="image/icons8-bin-24.png"></button></div>`;

    let currentTask = document.querySelectorAll(`.delete-button`);
    // console.log(currentTask);
    for (let i = 0; i < currentTask.length; i = i + 1) {
      currentTask[i].onclick = function () {
        //console.log(this);
        //console.log(currentTask[i].parentNode);
        currentTask[i].parentNode.remove();
        saveData();
      };
    }

    let tasks = document.querySelectorAll(`.task-span`);
    //console.log(tasks);

    for (let i = 0; i < tasks.length; i = i + 1) {
      //just for testing console.log(this);
      // console.log(tasks[i]);
      //console.log(tasks[0]);
      tasks[i].onclick = function () {
        this.classList.toggle(`completed`);
        //tasks.classList.toggle(`compeleted`);saveData()
      };
    }

    inputBox.value = "";
    saveData();
  }
};

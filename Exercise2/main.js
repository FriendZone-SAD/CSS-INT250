const taskInput = document.getElementById("taskInput");
const detailInput = document.getElementById("detailInput");
const addTaskBut = document.getElementById("addTaskBut");
const cardBody = document.getElementById("cardBody");
const searchInput = document.getElementById("searchInput");

let allTask = [];
let currentTab = "all";

const allAct = document.getElementById("AllAct");
const ActiveAct = document.getElementById("ActiveAct");
const DoneAct = document.getElementById("DoneAct");

cardBody.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;

  const id = Number(card.dataset.id);
  const task = allTask.find((t) => t.id === id);
  if (!task) return;

  if (e.target.classList.contains("done-btn")) {
    task.completed = true;
  }

  if (e.target.classList.contains("undone-btn")) {
    task.completed = false;
  }

  if (e.target.classList.contains("delete-btn")) {
    allTask = allTask.filter((t) => t.id !== id);
  }

  saveTasksToLocalStorage(allTask);
  renderCurrentTab();
});


document.getElementById("clearCompleted").addEventListener("click", () => {
  allTask = allTask.filter((t) => !t.completed);
  saveTasksToLocalStorage(allTask);
  renderCurrentTab();
});

searchInput.addEventListener("input", () => {
  renderCurrentTab();
});

function updateCounter() {
  const total = allTask.length;
  const active = allTask.filter((t) => !t.completed).length;
  document.getElementById("taskCounter").innerText =
    `${total} total, ${active} active`;
}

allAct.addEventListener("click", () => {
  setActiveTab("all");
});

ActiveAct.addEventListener("click", () => {
  setActiveTab("active");
});

DoneAct.addEventListener("click", () => {
  setActiveTab("done");
});

function setActiveTab(tab) {
  currentTab = tab;

  allAct.classList.remove("active");
  ActiveAct.classList.remove("active");
  DoneAct.classList.remove("active");

  if (tab === "all") allAct.classList.add("active");
  if (tab === "active") ActiveAct.classList.add("active");
  if (tab === "done") DoneAct.classList.add("active");

  renderCurrentTab();
}

addTaskBut.addEventListener("click", () => {
  const task = taskInput.value;
  const detail = detailInput.value;

  if (task.trim() === "" || detail.trim() === "") {
    alert("Please fill in both fields");
    return;
  }

  makeTaskCard(task, detail);
  taskInput.value = "";
  detailInput.value = "";
});

function makeTaskCard(task, detail) {
  const newTask = {
    id: Date.now(),
    task: task,
    detail: detail,
    completed: false,
    priority: "Low",
  };

  allTask.push(newTask);
  saveTasksToLocalStorage(allTask);
  renderCurrentTab();
}

function displayTasks(tasks) {
  cardBody.innerHTML = "";

  if (tasks.length === 0) {
    cardBody.innerHTML = "<p>There is no Task right now. T__T</p>";
    return;
  }

  tasks.forEach((taskObj) => {
    let card = document.createElement("div");
    card.classList = "card w-100 mb-3";
    card.dataset.id = taskObj.id;

    card.innerHTML = `
      <div class="card-body d-flex justify-content-between align-items-center task-body
           ${taskObj.completed ? "bg-success text-white" : ""}">
          <div><h5 class="card-title">${taskObj.task}</h5>
          <p class="card-text">${taskObj.detail}</p></div>
          <span class="badge badge-danger">High</span>
        <div>
          <a class="btn btn-success done-btn ${taskObj.completed ? "d-none" : ""}">Done</a>
          <a class="btn btn-warning undone-btn ${taskObj.completed ? "" : "d-none"}">Undone</a>
          <a class="btn btn-danger delete-btn">Delete</a>
        </div>
      </div>
    `;

    cardBody.appendChild(card);
  })
}

function loadSite() {
  allTask = loadTasksFromLocalStorage();
  renderCurrentTab();
}

function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("allTask", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const tasks = localStorage.getItem("allTask");

  try {
    const parsed = tasks ? JSON.parse(tasks) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function renderCurrentTab() {
  let tasks = allTask;

  const keyword = searchInput.value.toLowerCase();
  if (keyword) {
    tasks = tasks.filter((t) => t.task.toLowerCase().includes(keyword));
  }

  if (currentTab === "active") {
    tasks = tasks.filter((t) => !t.completed);
  } else if (currentTab === "done") {
    tasks = tasks.filter((t) => t.completed);
  }

  displayTasks(tasks);
  updateCounter();
}

window.addEventListener("load", () => {
  loadSite();
});

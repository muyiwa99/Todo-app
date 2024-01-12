"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
  const taskInput = document.getElementById("task-input");
  // Task list container
  const taskList = document.getElementById("todos");
  // Clear completed button
  const clearComp = document.querySelector(".clr");
  // Active Status button
  const activeButton = document.querySelector(
    ".status-button[data-status='active']"
  );
  // completed button
  const completedButton = document.querySelector(
    ".status-button[data-status='completed']"
  );
  const sunTheme = document.querySelector(".sun");
  const moonTheme = document.querySelector(".moon");

  const allButton = document.querySelector(".status-button[data-status='all']");

  // Tasks
  let tasks = [];

  // Filter
  let currentFilter = "all";

  // Input field
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && taskInput.value.trim() !== "") {
      tasks = [...tasks, { text: taskInput.value.trim(), completed: false }];
      renderTasks();
      taskInput.value = "";
    }
  });
  // Counter
  const counter = document.getElementById("count");

  function renderTasks() {
    taskList.innerHTML = "";

    // Setting the counter of current tasks
    counter.innerHTML = tasks.length;
    counter.style.color = getLabelColor();

    const filteredTasks = taskStatus(tasks, currentFilter);

    filteredTasks.forEach((task, index) => {
      // Creating a list Item
      const listItem = document.createElement("li");
      listItem.className = `task ${task.completed ? "completed" : ""}`;
      // Updating the background of the list items depending on the background color
      listItem.style.backgroundColor = getThemeBackgroundColor();
      listItem.style.borderBottom = "1px solid black";
      // listItem.style.color = getLabelColor();
      // 1st div holding all elemnents in the list item
      const divOne = document.createElement("div");
      divOne.className = "start";
      // 2nd div that holds the check box input and span
      const divTwo = document.createElement("div");
      divTwo.className = "on";

      // Checkbox
      const spanCheck = document.createElement("span");
      spanCheck.className = "check";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", function () {
        toggleTask(index);
      });

      // Label element
      const taskLabel = document.createElement("label");
      taskLabel.className = "label";
      taskLabel.textContent = task.text;

      taskLabel.style.color = getLabelColor();
      // Delete button
      const deleteButton = document.createElement("img");
      deleteButton.src = "/images/icon-cross.svg";

      deleteButton.addEventListener("click", function () {
        deleteTask(index);
      });

      // Using the Appendchild method to order how the classes are stacked to ensure it matches up with the Scss.
      taskList.appendChild(listItem);
      listItem.appendChild(divOne);
      listItem.appendChild(deleteButton);
      divOne.appendChild(divTwo);
      divTwo.appendChild(checkbox);
      divTwo.appendChild(spanCheck);
      divOne.appendChild(taskLabel);
    });

    statusButtons();
  }
  // This function sets the list item background depending on if the body contains a class called 'black-theme'
  function getThemeBackgroundColor() {
    return document.body.classList.contains("black-theme")
      ? "hsl(0, 0%, 98%)"
      : "hsl(235, 24%, 19%)";
  }

  function getLabelColor() {
    return document.body.classList.contains("black-theme")
      ? "hsl(235, 24%, 19%)"
      : "hsl(0, 0%, 98%)";
  }
  function toggleTheme() {
    const listItem = document.querySelectorAll(".task");
    const labelText = document.querySelectorAll(".label");

    labelText.textContent = listItem.textContent;
    const currentTheme = document.body.classList.contains("black-theme");
    document.body.classList.toggle("black-theme", currentTheme);
    listItem.forEach((item) => {
      item.style.backgroundColor = currentTheme
        ? "hsl(0, 0%, 98%)"
        : "hsl(235, 24%, 19%)";
    });

    labelText.forEach((label) => {
      label.style.color = currentTheme ? "black" : "white";
    });
  }

  // Toggling the listItems styling based on the theme clicked by the user
  sunTheme.addEventListener("click", toggleTheme);
  moonTheme.addEventListener("click", toggleTheme);

  function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;

    renderTasks();
  }
  // Deleting a task using the splice method
  function deleteTask(index) {
    tasks.splice(index, 1);
    // Invoking this function updates the tasklist
    renderTasks();
  }

  /* delete completed tasks */
  clearComp.addEventListener("click", function () {
    deleteCompletedTasks();
  });
  function deleteCompletedTasks() {
    // New ematy array to house the new tasks thast havent been completed
    const updatedTasks = [];

    tasks.forEach((task) => {
      if (!task.completed) {
        updatedTasks.push(task);
      }
    });

    tasks = updatedTasks;
    renderTasks();
  }

  // Seperating the tasks based on the task status
  function taskStatus(tasks, status) {
    switch (status) {
      case "active":
        return tasks.filter((task) => !task.completed);

      case "completed":
        return tasks.filter((task) => task.completed);

      case "all":
      default:
        return tasks;
    }
  }

  // Adding the 'active' class when a status button is clicked.
  function statusButtons() {
    allButton.classList.remove("active");
    activeButton.classList.remove("active");
    completedButton.classList.remove("active");

    if (currentFilter === "all") {
      allButton.classList.add("active");
    } else if (currentFilter === "active") {
      activeButton.classList.add("active");
    } else if (currentFilter === "completed") {
      completedButton.classList.add("active");
    }
  }

  allButton.addEventListener("click", function () {
    currentFilter = "all";

    renderTasks();
  });

  activeButton.addEventListener("click", function () {
    currentFilter = "active";

    renderTasks();
  });
  completedButton.addEventListener("click", function () {
    currentFilter = "completed";
    renderTasks();
  });
});

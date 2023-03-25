// Get the input field, button, and list
var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

// Add a new task when the user clicks the "Add" button
addButton.addEventListener("click", function() {
  if (taskInput.value === "") {
    alert("Please enter a task.");
  } else {
    var taskItem = document.createElement("li");
    var taskText = document.createTextNode(taskInput.value);
    taskItem.appendChild(taskText);
    
    // Add a "Remove" button to the task item
    var removeButton = document.createElement("button");
    var buttonText = document.createTextNode("Remove");
    removeButton.appendChild(buttonText);
    removeButton.classList.add("removeButton");
    taskItem.appendChild(removeButton);
    
    // Add event listener to remove button
    removeButton.addEventListener("click", function() {
      taskItem.remove();
    });
    
    // Add checkbox to the task item
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    taskItem.insertBefore(checkbox, taskText);
    
    // Add event listener to toggle completed class
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        taskItem.classList.add("completed");
      } else {
        taskItem.classList.remove("completed");
      }
    });
    
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});

// Add a new task when the user presses the Enter key
taskInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addButton.click();
  }
});

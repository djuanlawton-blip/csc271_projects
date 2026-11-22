/*
Name: D'Juan Lawton
Date: November 15, 2026
Project: StudySync
Description: Functions for creating, validating,
sorting, and completing tasks.
AI document link : https://docs.google.com/document/d/1bEoZcUYVip_X-prHXbmGytvvkclj_BZU_J14kICTBck/edit?usp=sharing
*/

// Get elements using their actual HTML IDs
const taskForm = document.getElementById("taskForm");
const taskNameInput = document.getElementById("Task");
const taskDueDateInput = document.getElementById("Date");


// Form submission event
taskForm.addEventListener("submit", function(event) {

    // Prevent the webpage from refreshing
    // AI helped me figure out this event. It stops the page from refreshing on the form submission.
    event.preventDefault();

    // User values
    const taskName = taskNameInput.value;
    const dueDate = taskDueDateInput.value;

    // Get the radio button value
    const selectedType = document.querySelector(
        'input[name="type"]:checked'
    );

    const taskType = selectedType ? selectedType.value : "";

    // Call the addTask function
    const newTask = addTask(taskName, dueDate, taskType);

    if (newTask !== null) {

        console.log("Task successfully added!", newTask);

        // Display updated tasks
        displayTasks(tasks);

        // Display success message
        document.getElementById("formFeedback").textContent =
            "Task added successfully!";

        // Clear previous input feedback
        document.getElementById("taskFeedback").textContent = "";

        // Clear the form
        taskForm.reset();

    } else {

        // Display error message
        document.getElementById("formFeedback").textContent =
            "Please complete all fields.";

    }
});

// Varables
var tasks = [];
var next_TaskId = 1;


// Display function.
// Purpose: Display a message when the task system loads.
// This function has no peramater or return value.
function displayMessage(){
    alert("🏴‍☠️ Ahoy, future Pirate King! Welcome aboard StudySync! Your journey to conquer assignments, defeat deadlines, and discover academic success starts here. Set your course, organize your tasks, and sail toward your goals. The One Piece awaits!"
        
    );
}

// Function Validate task
// This function checks that all required fields are completed with the 
// Parameters: taskName, dueDate, taskType and Return Value is true or false.
function validateTask(task_name, task_duedate,task_type){
    if(!task_name.trim() || !task_duedate || !task_type){
        return false;
    }

    return true;
}

// Function Add a new task
// This function creates a task and add it to the task list with the
// Parameters: taskName, dueDate, taskType and Return Value is a 
// New task or null.
function addTask(task_name, task_duedate,task_type){
    
    if(!validateTask(task_name, task_duedate,task_type)){
        console.log("Plesase complete all tasks.");
        return null;
    }

    var task = {
        id: next_TaskId++,
        name: task_name.trim(),
        date: task_duedate,
        type: task_type,
        complete: false
    };

    tasks.push(task);

    console.log("Added task:", task);

    return task;
}


// Function Sort tasks by due date
// This function should sort tasks by their due dates and Uses Parameter: taskList to
// Return a Sorted array.
function sortTasksByDueDate(tasks){
    return [...tasks].sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });
}

// Function: Display tasks
// Purpose: Display tasks in the HTML table.
// Parameter: taskList - array of tasks
// Return Value: None
function displayTasks(taskList) {

    const taskTable = document.getElementById("taskList");

    // Clear existing table rows
    taskTable.innerHTML = "";

    // Sort tasks by their due dates
    const sortedTasks = sortTasksByDueDate(taskList);

    // Loop through tasks and create table rows
    sortedTasks.forEach(function(task) {

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = task.name;

        const dateCell = document.createElement("td");
        dateCell.textContent = task.date;

        const typeCell = document.createElement("td");
        typeCell.textContent = task.type;

        row.appendChild(nameCell);
        row.appendChild(dateCell);
        row.appendChild(typeCell);

        taskTable.appendChild(row);
    });
}
// Focus event that tells the user what they need to enter.
taskNameInput.addEventListener("focus", function() {
    document.getElementById("taskFeedback").textContent =
    "Enter a task name to add to your planner.";

});

// Blur event that tells the user they can't leave the text feild empty.
taskNameInput.addEventListener("blur", function() {
    if (taskNameInput.value.trim() === "") {
        document.getElementById("taskFeedback").textContent =
            "Task name cannot be blank.";
    } else {
        document.getElementById("taskFeedback").textContent = "";
    }
});

// Display load function
window.addEventListener("load", function() {
    displayMessage();
});
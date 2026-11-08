
/*
Name: D'Juan Lawton
Date: November 8, 2026
Description: StudySync Assignment Priority Planner.
Uses conditional statements to determine assignment priority,
a for loop to display study tips, a while loop to display
remaining assignments, and a NodeList loop to style questions.
*/

// Html elements
const due_date = document.getElementById("dueDate");
const grade_weight = document.getElementById("gradeWeight");
const difficulty = document.getElementById("difficulty");
const check_Priority = document.getElementById("calculateButton");
const priority_Result = document.getElementById("priorityResult");
const assignmentCount = document.getElementById("assignmentCount");
const showAssignments = document.getElementById("showAssignments");
const assignmentList = document.getElementById("assignmentList");

// loops
check_Priority.addEventListener("click", function(){
    // allocate varables
    var dueDate = due_date.value;
    var gradeWeight = grade_weight.value;
    var level = difficulty.value;

    // Make sure all questions are answered
    if (dueDate === "" || gradeWeight === "" || level === "") {
        priority_Result.textContent = "Please answer all questions!";
    }
    else if (dueDate === "yes" && gradeWeight === "yes" && level === "yes") {
        priority_Result.textContent = "URGENT! This assignment is due soon, worth a lot, and difficult!";
    }
    else if (dueDate === "yes") {
        priority_Result.textContent = "Work immediately!";
    }
    else if (gradeWeight === "yes") {
        priority_Result.textContent = "High Priority!";
    }
    else if (level === "yes") {
        priority_Result.textContent = "Start early!";
    }
    else {
        priority_Result.textContent = "Schedule for later!";
    }
});

// Store study tips.
const tips = [
    "Start assignments early.",
    "Take breaks while studying.",
    "Focus on difficult assignments first.",
    "Review your notes daily."
];

const Studytips = document.getElementById("studyTips");

// For loop that goes through the list of study tips.
for(var i = 0; i < tips.length; i++){
    var item = document.createElement("li");

    item.textContent = tips[i];

    
    Studytips.appendChild(item);
}

// Show remaining assignments when button is clicked
showAssignments.addEventListener("click", function() {

    // Get number of remaining assignments
    var remaining = Number(assignmentCount.value);
    var count = 1;

    // Clear previous assignments
    assignmentList.innerHTML = "";

    // Check for invalid input
    if (assignmentCount.value === "" ||
        !Number.isInteger(remaining) ||
        remaining < 0) {
        assignmentList.textContent = "Please enter a valid number.";
        return;
    }

    // Create a list of remaining assignments until the number of assignments entered is reached.
    while (count <= remaining) {

        var item = document.createElement("li");

        item.textContent = "Assignment " + count;

        assignmentList.appendChild(item);

        count++;
    }

    if (remaining === 0) {
        assignmentList.textContent = "All assignments completed!";
    }
});

// NodeList Loop

// Select all Study's Planner questions
const questions = document.querySelectorAll(".question");

// Check if questions exist
if (questions.length > 0) {

    // Applies styling to every question
    for (var i = 0; i < questions.length; i++) {

        questions[i].style.backgroundColor = "lightblue";
        questions[i].style.padding = "15px";
        questions[i].style.marginBottom = "10px";
        questions[i].style.borderRadius = "8px";

    }
}
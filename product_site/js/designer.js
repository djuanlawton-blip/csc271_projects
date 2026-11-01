/*
Name: D'Juan Lawton
Date: November 1, 2026
Description: Assignment Progress Tracker for StudySync
*/

// Select html elements
const total_input = document.getElementById("totalAssignments");
const completed_input = document.getElementById("completedAssignments");
const result = document.getElementById("progressResult");
const message = document.getElementById("progressMessage");
const t_message = document.getElementById("thoughtFullMessage")

// selecting element using the other dom methods
const description = document.getElementsByClassName("progress_des");
const headings = document.getElementsByTagName("h2");
const button = document.querySelector("#calculateButton");

// store string
var tracker_name = "Assignment Progress Tracker";

// Update tracker heading
headings[1].textContent = tracker_name;

// update the description
description[0].textContent = "Enter your assignment number to track your progress.";

// Calculate progress when button is clicked
button.addEventListener("click", function(){
    // store number inputs
    var total = Number(total_input.value);
    var completed = Number(completed_input.value);

    // Check for empty inputs
    if (total_input.value === "" || completed_input.value === "") {
        result.textContent = "Please enter both numbers.";
        message.textContent = "";
        t_message.textContent = "";
        return;
    }

    // Check for invalid numbers
    if (!Number.isInteger(total) || !Number.isInteger(completed) ||
        total <= 0 || completed < 0 || completed > total) {
        result.textContent = "Please enter valid assignment numbers.";
        message.textContent = "";
        t_message.textContent = "";
        return;
    }

    // Calculate assignment progress
    var percentage = (completed / total) * 100;
    var remaining = total - completed;

    // Display completion percentage
    result.textContent = "Progress: " + percentage.toFixed(1) + "%";

    // Display remaining assignments using innerHTML
    message.innerHTML = "<strong>Assignments Remaining:</strong> " + remaining;

    // Display encouragement based on progress
    if (percentage === 0) {
        t_message.textContent = "Wake up, warrior! Your journey across the Grand Line of Homework begins today. Set sail!";
    }
    else if (percentage <= 25) {
        t_message.textContent = "Raise the Jolly Roger, warrior! The S.S. Procrastination has officially left the dock!";
    }
    else if (percentage <= 50) {
        t_message.textContent = "Keep sailing, warrior! Even a Sea King can't stop someone armed with the legendary Homework-Haki!";
    }
    else if (percentage <= 75) {
        t_message.textContent = "You're past the halfway point, warrior! Your Observation Haki can finally sense the weekend!";
    }
    else if (percentage < 100) {
        t_message.textContent = "The final assignment approaches, warrior! Activate Gear Fifth and defeat the Deadline Admiral!";
    }
    else {
        t_message.textContent = "THE ONE PIECE IS REAL, warrior! You've conquered the Grand Line of Homework! Your legendary treasure is a nap!";
    }
});

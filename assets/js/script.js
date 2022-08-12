var today = moment();
$("").text(today.format("MMM Do, YYYY"));

var dateTimeFormat = today.format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#date-time").text(dateTimeFormat);

var projectName = document.getElementById("project-name");
var projectType = document.getElementById("project-type");
var dueDate = document.getElementById("due-date");
var hourlyRate = document.getElementById("hourly-rate");

localStorage.setItem("name", projectName);
localStorage.setItem("type", projectType);
localStorage.setItem("date", dueDate);
localStorage.setItem("rate", projectType);

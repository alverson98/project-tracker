var today = moment();
$("").text(today.format("MMM Do, YYYY"));

var dateTimeFormat = today.format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#date-time").text(dateTimeFormat);

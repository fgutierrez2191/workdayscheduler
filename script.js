var $currentDay = $("#currentDay");
var $timeBlocks = $(".time-block");
var $scheduleArea = $(".schedule");

var toDOItems = [];

var currentDate = moment().format("dddd, MMMM, Do");
var currentHour = moment().format("H");

//current date display
$currentDay.text(currentDate);
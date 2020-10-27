$(document).ready(function(){
var $currentDay = $("#currentDay");
var $timeBlocks = $(".time-block");
var $scheduleArea = $(".schedule");

var toDOItems = [];

var currentDate = moment().format("dddd, MMMM, Do");
var currentHour = moment().format("H");


//retrieving local storage
$("#hour9 .description").val(localStorage.getItem("9"))
$("#hour10 .description").val(localStorage.getItem("10"))
$("#hour11 .description").val(localStorage.getItem("11"))
$("#hour12 .description").val(localStorage.getItem("12"))
$("#hour13 .description").val(localStorage.getItem("13"))
$("#hour14 .description").val(localStorage.getItem("14"))
$("#hour15 .description").val(localStorage.getItem("15"))
$("#hour16 .description").val(localStorage.getItem("16"))
$("#hour17 .description").val(localStorage.getItem("17"))


//current date display
$currentDay.text(currentDate);

//need to get the timeblocks to show current hour etc. 
$timeBlocks.each(function(){
    var $thisBlock = $(this);
    var thisBlockHr = parseInt($thisBlock.attr("data-hour"));
  
    if( thisBlockHr == currentHour){
      $thisBlock.addClass("present").removeClass("past future");
    }
    if (thisBlockHr < currentHour){
      $thisBlock.addClass("past").removeClass("present future");
    }
    if (thisBlockHr > currentHour){
      $thisBlock.addClass("future").removeClass("past present");
    }
  });

//   var parsedTodos = JSON.parse(todos);
//   console.log(parsedTodos);
//   function initializeTodos(){
//     $timeBlocks.each(function(){
//       var $thisBlock = $(this);
//       var toDoObject = {};
//       toDoObject.hour = parseInt($thisBlock.attr("data-hour"));
//       toDoItems.push(toDoObject);
//     });
  
//     localStorage.setItem("todos", JSON.stringify(toDoItems));
//   } 

  //function renderSchedule(){
//     toDoItems = localStorage.getItem("todos");
//     toDoItems = JSON.parse(toDoItems);
//   @@ -52,21 +17,16 @@function renderSchedule(){
//     for (var i = 0; i < toDoItems.length; i++){
//       var itemHour = toDoItems[i].hour;
//       var itemText = toDoItems[i].text; 
//       console.log(itemHour + "|" + itemText);
  
//       $("[data-hour=" + itemHour + "]").children("textarea").val(itemText);
//     }
  
  
  
//   }
  
  $(".saveBtn").on("click", function(){
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("data-hour")
    localStorage.setItem(time,value);
  });

    //display current date
    $currentDay.text(currentDate);
  
    //add style to time blocks to show where we are in the day
    $timeBlocks.each(function () {
      var $thisBlock = $(this);
      var thisBlockHr = parseInt($thisBlock.attr("data-hour"));
  
      if (thisBlockHr == currentHour) {
        $thisBlock.addClass("present").removeClass("past future");
      }
      if (thisBlockHr < currentHour) {
        $thisBlock.addClass("past").removeClass("present future");
      }
      if (thisBlockHr > currentHour) {
        $thisBlock.addClass("future").removeClass("past present");
      }
    });
  
    //renderSchedule();
    //$scheduleArea.click(saveHandler);
    //$(".saveBtn").on("click", "button", saveHandler);
  
  });
// wrapping all code to one function so it doesnt run before the browser has finished rendering all the elements.
$(function () {
  var today = dayjs();

  // sets id of currentDay to be the text date format
  $('#currentDay').text(today.format('MMMM D, YYYY h:mm a'));
  // event listener for saveBtn id
  $('.saveBtn').on('click', function () {
    // var that references the input from the sibling html description attribute
    var textInput = $(this).siblings('.description').val();
    // var that references the parent html id attribute
    var timeKey = $(this).parent().attr("id");
    //sets timekey and textInput defined above to localStorage
    localStorage.setItem(timeKey, textInput)
  })
  // localStorage loads set items using getItem
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  function hourTracker() {
    //var for the current hour
    var currentHour = today.hour();
    // loops over each div with the time block id
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      // if the time ID is before the current hour, add the past class from CSS
      if (blockHour < currentHour) {
        $(this).addClass('past');
        $(this).removeClass("future");
        $(this).removeClass("present");
     } // if the time ID is equal to the current hour, remove the past and future classes & add the present class
      else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      } // If the time ID is greater than the current time, remove the past and present classes & add the future class
      else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
//calls the hour tracker function to execute
hourTracker();
 // Use setTimeout to update the time every minute (1000ms * 60s)
 setTimeout(function () {
  // clears the current URL
  location = ''; // location references the current URL
}, 1000 * 60);
});

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



  
});

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








  
});

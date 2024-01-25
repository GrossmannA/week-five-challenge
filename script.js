$(document).ready(function () {

  var scheduleEl = $(".container-lg").children(".row");
  var todaysDate = dayjs();

  $("#currentDay").text(todaysDate);

  var saveUserInput = function(event) {
    var timeBlock = $(event.target).parent().attr("id");
    var userEventInput = $(event.target).siblings("textarea");
    localStorage.setItem(timeBlock, userEventInput.val());
    userEventInput.text = userEventInput.val();
  }

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  $(".saveBtn").on("click", saveUserInput);

  var updateTimeBlocks = function(event) {
    var now = dayjs().hour();
    for (var i = 0; i < scheduleEl.length; i++){
      var currentHour = $(scheduleEl[i]).attr("id");
      var hourOnly = currentHour.slice(5);
      //conditional to assign past/present/future class
      if (hourOnly < now) {
        $(scheduleEl[i]).removeClass("future");
        $(scheduleEl[i]).removeClass("present");
        $(scheduleEl[i]).addClass("past");
      } else if (hourOnly > now) {
        $(scheduleEl[i]).addClass("future");
      } else {
        $(scheduleEl[i]).removeClass("future");
        $(scheduleEl[i]).addClass("present");
      }
    }
  }

  updateTimeBlocks();

  var checkCurrentTime = setInterval(updateTimeBlocks, 10000);

});

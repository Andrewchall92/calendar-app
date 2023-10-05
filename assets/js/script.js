
$(function () {
  var hours =[9,10,11,12,13,14,15,16,17];
  var today = dayjs();
  var currentHour = today.hour();
  
  $('#currentDay').text(today.format('MMM D, YYYY'));
  
  $(".saveBtn").on("click", function() {
        var hour = $(this).siblings(".hour").text();
        var description = $(this).siblings(".description").val();
        localStorage.setItem(hour, description);
        console.log('clicked')
        console.log(this)
    });
  
  $(".hour").each(function() {
      var hour = $(this).text();
      var description = localStorage.getItem(hour);

      if (description !== null) {
          $(this).siblings(".description").val(description);
      }
    });

  for(var i=0; i < hours.length; i++) {
    if (hours[i] < currentHour) {
    $('#hour' + hours[i]).addClass('past')
  } else if (hours[i] === currentHour) {
    $('#hour' + hours[i]).addClass('present')
  } else {
    $('#hour' + hours[i]).addClass('future')
  };
 };
});

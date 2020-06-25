$(document).ready(() => {
    // Set empty array in local storage to store events data
   localStorage.setItem('events',JSON.stringify([]));
   

    //Date format have been set and displayed at the top of page.
    var now = moment().format("MM/DD/YYYY");
    var date = $("#currentDay");
    date.text(now);

    // Iterate through input elements and set the color based on event time
    var hour = moment().format("HH");
    var currentHour = Number.parseInt(hour);
    $(".event").each(function () {
        var eventHour = Number.parseInt(this.getAttribute('data-time'));
        console.log(eventHour);
        if (eventHour === currentHour) {
            $(this).addClass('present');
        } else if (eventHour < currentHour) {
            $(this).addClass('past');
        } else {
            $(this).addClass('future');
        }
    });

    // Connecting input and save buttons to each other.
    $(".btn").on("click", function (event) {
        event.preventDefault();
        var inputText = event.target;
        var input = $(this).attr("data-time");
        var inputText = $(`#${input}`).val();
    });

    // get events from localstorage and set the data and push it to localstorage
    function setLocalStorage(index, data) {
       var events = getLocalStorage();
       events[index] = data;
       localStorage.setItem("events", JSON.stringify(events));
    }

    // get the events from localstorage
    function getLocalStorage(){
      var events = localStorage.getItem('events');
      return JSON.parse(events);
    }
});
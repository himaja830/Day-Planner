$(document).ready(() => {
    // Set empty array in local storage to store events data
   localStorage.setItem('eventArr',[]);

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

    // Storing the input events in LS
    function setLocalStorage(i){
        $(".event").getAttribute('data-index') === eventArr[i];
          
    }
    function getLocalStorage(){

    }
});
$(document).ready(() => {
    localStorage.setItem("userData",[]);

//Date format have been set and displayed at the top of page.
    var now = moment().format("MM/DD/YYYY");
    var date = $("#currentDay");
    date.text(now);

//get input fields to alter their color relative to time.bg-gray.
var hour = moment().format("HH");
 $(".event").each(function(){
    var eventHour = Number.parseInt(this.id);
    var currentHour = Number.parseInt(hour);
     if (eventHour === currentHour) {
         $(this).addClass('present');
         console.log(hour, this.id, 'present');
     } else if (eventHour < currentHour) {
        $(this).addClass('past');
        console.log(hour, this.id, 'past');
     } else {
        $(this).addClass('future');
        console.log(hour, this.id, 'future');
     }
     
 });



    $(".btn").on("click", function (event) {
        event.preventDefault();
        var inputText = event.target;
        var input = $(this).attr("data-time");
        var inputText = $(`#${input}`).val();
        localStorage.setItem("inputText",$(`#${input}`).val());
    })


   

   

});
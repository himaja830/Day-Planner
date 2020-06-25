$(document).ready(() => {
    localStorage.setItem("userData",[]);

//Date format have been set and displayed at the top of page.
    var now = moment().format("MM/DD/YYYY");
    var date = $("#currentDay");
    date.text(now);

//get input fields to alter their color relative to time.bg-gray.
var hour = moment().format("HH");
 $(".event").each(function(){
     console.log(hour, this.id);
     if (hour == this.id) {
         $(this).addClass('present');
     } else if (this.id < hour) {
        $(this).addClass('past');
     } else {
        $(this).addClass('future');
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
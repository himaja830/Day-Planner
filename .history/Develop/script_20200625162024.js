$(document).ready(() => {
    localStorage.setItem("userData",[]);

//Date format have been set and displayed at the top of page.
    var now = moment().format("MM/DD/YYYY");
    var date = $("#currentDay");
    date.text(now);

//get input fields to alter their color relative to time.bg-gray.
var input1 = $("#9");
var input2 = $("#10");
var input3 = $("#11");
var input3 = $("#12");
var input3 = $("#1");
var input3 = $("#2");
var input3 = $("#3");
var input3 = $("#4");
var input3 = $("#5");
   
    


    $(".btn").on("click", function (event) {
        event.preventDefault();
        var inputText = event.target;
        var input = $(this).attr("data-time");
        var inputText = $(`#${input}`).val();
        localStorage.setItem("inputText",$(`#${input}`).val());
    })


   

   

});
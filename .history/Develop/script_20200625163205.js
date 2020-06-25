$(document).ready(() => {
    localStorage.setItem("userData",[]);

//Date format have been set and displayed at the top of page.
    var now = moment().format("MM/DD/YYYY");
    var date = $("#currentDay");
    date.text(now);

//get input fields to alter their color relative to time.bg-gray.
 $(".event").each(function(){
     console.log(this.value);
 });



    $(".btn").on("click", function (event) {
        event.preventDefault();
        var inputText = event.target;
        var input = $(this).attr("data-time");
        var inputText = $(`#${input}`).val();
        localStorage.setItem("inputText",$(`#${input}`).val());
    })


   

   

});
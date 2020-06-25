$(document).ready(() => {
    localStorage.setItem("userData",[]);


    var now = moment().format("MM/DD/YYYY");
    var date = $("#currentDay");
    date.text(now);
    


    $(".btn").on("click", function (event) {
        event.preventDefault();
        var inputText = event.target;
        var input = $(this).attr("data-time");
        var inputText = $(`#${input}`).val();
        localStorage.setItem("inputText",$(`#${input}`).val());
    })


   

   

});
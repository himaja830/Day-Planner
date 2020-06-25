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


   

    $("input").each(function () {
        var inputText = parseInt($(this).attr("data-time"));
        if (inputText < now) {
            $(this).addClass("bg-gray");
        }


        if (inputText > now) {
            $(this).addClass("bg-green")
        }

        if (inputText === now) {
            $(this).addClass("bg-red")
        }
})


});
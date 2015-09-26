$(function() {
    $.ajax({
        url:"/getStudentData"
    }).done(function(response) {

        var students = response;

        for (var i = 0; i < students.length; i++) {
            $(".jcarousel").append($("<div class='colorDivs' style='background-color:" + response[i].value + "'><p class='colorName'>" + response[i].color + "</p></div>"));
        }
    });
});
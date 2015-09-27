$(function() {
    $.ajax({
        url:"/getStudentData"
    }).done(function(response) {

        var students = response;

        for (var i = 0; i < students.length; i++) {

            var active = "";

            if(i == 0) {
                i = active;
            };

                var descriptionList = "";

                    for (var iTwo = 0; i < students[i].description.length; iTwo++) {

                    var list = $("<li class='bulletList'>" + students[i].description[i] + "</li>");

                    $(".desList").append(list);
                    }

            var slide = $("<div class='item'><p>" + students[i].name + "</p><p>" + descriptionList + "</p><p>" + students[i].shoutout + "</p></div>");

        $(".carousel-inner").append(slide);
            //$(".carousel").append($("<div class='colorDivs' style='background-color:" + response[i].value + "'><p class='colorName'>" + response[i].color + "</p></div>"));
        }
    });
});
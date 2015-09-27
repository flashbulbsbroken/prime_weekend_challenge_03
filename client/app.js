$(function() {
    $.ajax({
        url:"/getStudentData"
    }).done(function(response) {

        var students = response;

        for (var i = 0; i < students.length; i++) {

            //var active = "";
            //
            //if(i == 0) {
            //    i = active;
            //};

                //var descriptionList = "";
                //
                //var description = students[i].description;
                //
                //    for (var iTwo = 0; i < description[iTwo].length; iTwo++) {
                //
                //    var list = $("<li class='bulletList'>" + students[i]['description'][iTwo] + "</li>");
                //
                //    $(".desList").append(list);
                //    }

            var slide = $("<div class='item-active'><p>" + students[i].name + "</p><p>" + students[i].description + "</p><p>" + students[i].shoutout + "</p></div>");
            console.log(slide);

        $("#carousel-inner").append(slide);
            //$(".carousel").append($("<div class='colorDivs' style='background-color:" + response[i].value + "'><p class='colorName'>" + response[i].color + "</p></div>"));
        }
    });
});
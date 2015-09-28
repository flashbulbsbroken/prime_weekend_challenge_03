$(function() {
    $.ajax({
        url:"/getStudentData"
    }).done(function(response) {
    console.log(response);

        var students = response;

        for (var i = 0; i < students.length; i++) {

            var active = "";
                if(i == 0) {
                    active = " active";
                }

            var slide = $("<div class='item" + active + "'><p class='name'>" + students[i].name + "</p><p class='description'>" + students[i].description + "</p><p class='shoutout'>" + students[i].shoutout + "</p></div>");

        $(".carousel-inner").append(slide);

        $(".carousel-indicators").append("<li data-target='#carousel-example-generic' data-slide-to='" + i + "' class='" + active + "'></li>");

            $('body').click(function() {
                $('.slide').fadeIn(600).addClass('active-slide');
            });

        }

        $('.carousel').carousel();
    });
});
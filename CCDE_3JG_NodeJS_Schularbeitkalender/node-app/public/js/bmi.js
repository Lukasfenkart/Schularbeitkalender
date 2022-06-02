$(document).ready(function () {
    console.log("ready...");
    $("#button_send").click(function () {
        console.log("button_send called");
        var weight = $("#weight").val();
        var height = $("#height").val();

        $.ajax({
            type: "POST",
            url: "/bmi",
            data: {
                "weight": weight,
                "height": height
            },
            cache: false,
            success: function (data) {
                var result = $.parseJSON(data);
                $("#result_bmi").text(result.bmi);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus);
                alert("Error: " + errorThrown);
            }
        });
    });

    $("#button_send_age").click(function () {
        console.log("button_send_age called");
        var age = $("#age").val()
        console.log("age: " + age);

        $.ajax({
            type: "POST",
            url: "/age",
            data: {"age": age},
            cache: false,
            success: function (data) {
                $("#result").text(data);
                var result = $.parseJSON(data);
                $("#result_age").text(result.salutation + ' ' + result.age);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus);
                alert("Error: " + errorThrown);
            }
        });
    });
});
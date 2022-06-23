$(document).ready(function(){
  console.log("ready...");
  $("#button_send").click(function(){
    console.log("button_send called");
    var Fach1 = $("#Fach1").val()
    console.log("Fach1: " + Fach1);

    var Datum1 = $("#Datum1").val()
    console.log("Datum1: " + Datum1);

    $.ajax({
      type: "POST",
      url: "/Sak",
      data: {
        "Fach1": Fach1,
        "Datum1": Datum1
      },
      cache: false,
      success: function(data){
         $("#result").text(data);
     var result = $.parseJSON(data);
         $("#result_name").text(result.Fach1 + ' am ' + result.Datum1);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("Status: " + textStatus); alert("Error: " + errorThrown);
      }
    });
  });
});
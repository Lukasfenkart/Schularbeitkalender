$(document).ready(function(){	
  console.log("ready...");	
  $("#button_send").click(function(){
    console.log("button_send called");
    var name1 = $("#name1").val()
    console.log("name1: " + name1);

    $.ajax({
      type: "POST",
      url: "/sayhello",
      data: {"name1": name1},
      cache: false,
      success: function(data){
         $("#result").text(data);
	 var result = $.parseJSON(data);
         $("#result_name").text(result.salutation + ' ' + result.name1);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
        alert("Status: " + textStatus); alert("Error: " + errorThrown); 
      }      
    });
  });

  $("#button_send1").click(function() {
    console.log("button_send1 called");
    var alter1 = $("#alter1").val()
    console.log("alter1: " + alter1);

    $.ajax({
      type: "POST",
      url: "/sayalter",
      data: {"alter1": alter1},
      cache: false,
      success: function(data){
         $("#result").text(data);
	 var result = $.parseJSON(data);
         $("#result_alter").text(result.salutation + ' ' + result.alter1);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("Status: " + textStatus); alert("Error: " + errorThrown);
      }
    });

  });
});	    

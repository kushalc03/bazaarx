$(document).ready(function() {
    $("#sendPlainJson").click(function(e) {
       var eNameData = $("#name").val();
       var dataToSend = 'name=' + eNameData;

       $.ajax({                
           url: "index.php", 
           type: "POST",
           data: dataToSend,     
           cache: false,
           success: function(php_output) {
               $("#results").html(php_output);
           }
       }); 
    }); 
}); 
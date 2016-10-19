var favoriteColor;

$(document).ready(function() {
  $("#colorinput").change(function(){
    favoriteColor = $("#colorinput").val();
    $(".favoriteColor").css("background-color", favoriteColor);

  })


});

$(document).ready(function(){
$("h1").hover(function() {
  $(this).css({"color":"red"});
});

var $div = $("#div-stats");

$("#button-stats").click(function() {
    $($div).toggle();
  });


});

$(document).ready(function(){

  var animal = $("input:radio[name=animal]:checked").val();
  $("#animalForm").submit(function(event) {
  event.preventDefault();

  if (animal === "turtle") {
    $("#turtle").show();
  } else if (animal === "snake") {
    $("#snake").show();
  } else if (animal === "salamander") {
    $("#salamander").show();
  }
});
});

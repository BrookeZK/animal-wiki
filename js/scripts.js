$(document).ready(function(){
  $("#animalForm").submit(function(event) {
    // $("body").find(".col-md-4").addClass("hidden");
    // $("body").find(".col-md-4").toggleClass("hidden");
    var animal = $("input:radio[name=animal]:checked").val();
    if (animal === "turtle") {
      $("#turtle").show();
      $("#snake, #salamander").hide();
    } else if (animal === "snake") {
      $("#snake").show();
      $("#turtle, #salamander").hide();
    } else if (animal === "salamander") {
      $("#salamander").show();
      $("#snake, #turtle").hide();
    }

    event.preventDefault();
});
});

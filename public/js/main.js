// Pet Profile
$("#submitBtn").on("click", function (event) {
  event.preventDefault();
  // Form validation
  var valid = true;
  if ($("#name").val() === "") {
      valid = false;
  } else if ($("#name").val() === "empty" || $("#age").val() === "empty" || $("#gender").val() === "empty" || $("#size").val() === "empty" || $("#breed").val() === "empty" || $("#bio").val() === "empty") {
      valid = false;
  }
  if (valid === true) {
      var newPet = {
          name: $("#name").val().trim(),
          scores: [
              $("#age").val(),
              $("#gender").val(),
              $("#size").val()
          ],
          breed: $("#breed").val().trim(),
          bio: $("#bio").val().trim()
      }

      console.log(newPet);

      $.post("/api/pet", newPet)
        .then(function(data) {
            console.log(data);
        });
    }
});


$("#pup-btn").on("click", function() {
  window.location.assign("../html/photobooth.html");
})

$(document).ready(function() {
    $("#events").hide();
    $("#photobooth-container").hide();
    $("#submitBtn").on("click", function() {
      $("#pet-profile-id").hide();
      $("#events").show();
      $("#photobooth-container").show();
    });
});
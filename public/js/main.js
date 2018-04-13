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
              $("#name").val(),
              $("#age").val(),
              $("#gender").val(),
              $("#size").val(),
              $("#breed").val(),
              $("#bio").val(),
          ],
          bio: $("#bio").val().trim(),
      }
    }
});



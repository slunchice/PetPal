$.get("/api/events", function(data) {
  // console.log(data);
  if (data.length) {
    for (var i = 0; i < 3; i++) {
      var event = data[i];
      // Creates newEvent object with each return object in for loop
      var newEvent = {
        logo: event.logo.original.url,
        name: event.name.html,
        description: event.description.html,
        link: event.url
      }
      console.log(newEvent);
      // Appends each newEvent object to respective DOM elements
      $("#eventLogo" + i + "").html("<img style='border:10px solid black;padding:5px;'id='logo' src='" + newEvent.logo + "'/>");
      $("#eventName" + i + "").html(newEvent.name);
      $("#eventDescription" + i + "").html(newEvent.description);
      var string = "See more";
      var result = string.link("" + newEvent.link + "");
      $("#eventLink" + i + "").html(result);
    }
  }
});
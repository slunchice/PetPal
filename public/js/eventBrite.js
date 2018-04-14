$.get("/api/events", function(data) {
  console.log(data);
  var newEvent = {
    logo: event.logo.url,
    name: event.name.html,
    time: event.start.local,
    url: event.url
  }
  // Appends each newEvent object to respective DOM elements
  // $("#eventLogo" + i + "").html("<img style='border:10px solid black;padding:5px;'id='logo' src='" + newEvent.logo + "'/>");
  // $("#eventName" + i + "").html(newEvent.name);
  // $("#eventTime" + i + "").html(newEvent.time);
  // var string = "Click here for more details!";
  // var result = string.link("" + newEvent.url + "");
  // $("#eventUrl" + i + "").html(result);
});
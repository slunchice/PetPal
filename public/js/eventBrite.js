// Variables to build GET request to EventBrite API
var url = "https://www.eventbriteapi.com/v3/events/search/?token=";
var token = "B67FCSUCKZGEB7QG7FI2";
var query = "&q=dogs&location.address=charlotte";

// Service call to EventBrite API
$.get(url + token + query, function(res) {
  if (res.events.length) {
    for (var i = 0; i < 3; i++) {
      var event = res.events[i];
      console.log(event);
      // Creates newEvent object with each return object in for loop
      var newEvent = {
        logo: event.logo.url,
        name: event.name.html,
        description: event.description.html,
        link: event.url
      }
      // Appends each newEvent object to respective DOM elements
      $("#eventLogo" + i + "").html("<img id='logo' src='" + newEvent.logo + "'/>");
      $("#eventName" + i + "").html(newEvent.name);
      $("#eventDescription" + i + "").html(newEvent.description);
      var string = "See More";
      var result = string.link("" + newEvent.link + "");
      $("#eventLink" + i + "").html(result);
    }
  }
});
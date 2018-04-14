// Variables to build GET request to EventBrite API
// var url = "https://www.eventbriteapi.com/v3/events/search/?token=";
// var token = "B67FCSUCKZGEB7QG7FI2";
// var query = "&q=dogs&location.address=charlotte";

// // Service call to EventBrite API
// $.get(url + token + query, function(res) {
//   if (res.events.length) {
//     for (var i = 0; i < 3; i++) {
//       var event = res.events[i];
//       // Creates newEvent object with each return object in for loop
//       var newEvent = {
//         logo: event.logo.url,
//         name: event.name.html,
//         time: event.start.local,
//         url: event.url
//       }
//       // Appends each newEvent object to respective DOM elements
//       $("#eventLogo" + i + "").html("<img style='border:10px solid black;padding:5px;'id='logo' src='" + newEvent.logo + "'/>");
//       $("#eventName" + i + "").html(newEvent.name);
//       $("#eventTime" + i + "").html(newEvent.time);
//       var string = "Click here for more details!";
//       var result = string.link("" + newEvent.url + "");
//       $("#eventUrl" + i + "").html(result);
//     }
//   }
// });

$.get("/api/events", function(res) {
  console.log(res);
  // if (res.length) {
  //   for (var i = 0; i < res.length; i++) {
  //     var event = res[i];
  //     console.log(event);
  //     var newEvent = {
  //       logo: event.logo.url,
  //       name: event.name.html,
  //       time: event.start.local,
  //       url: event.url
  //     }
  //     $("#eventName" + i + "").html(newEvent.name);
  //   }
  // }
});
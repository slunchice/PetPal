  // const https = require("https");
  // https.post = require("http-post");

  // const express = require("express");
  // const app = express();

  // const url =
  //   "https://www.eventbriteapi.com/v3/events/search/?token=";

  // const token =
  //   "B67FCSUCKZGEB7QG7FI2";

  // const query =
  //   "&q=dogs&location.address=charlotte";

  // const events = [];

  // https.get(url + token + query, res => {
  //   res.setEncoding("utf8");
  //   let body = "";
  //   res.on("data", data => {
  //     body += data;
  //   });
  //   res.on("end", () => {
  //     body = JSON.parse(body);
  //     // console.log(body.events[0]);
  //     for (let i = 0; i < 3; i++) {
  //       events.push(body.events[i]);
  //       console.log(events);
  //     }
  //   });
  // });

  // https.post('http://localhost:8080/api/events', {events}, function(res) {
  //   res.setEncoding('utf8');
  //   res.on('data', function(chunk) {
  //     console.log(chunk);
  //     console.log("Maybe?");
  //   });
  // });
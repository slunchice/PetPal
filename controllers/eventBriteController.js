const https = require("https");

const url =
  "https://www.eventbriteapi.com/v3/events/search/?token=";

const token =
  "B67FCSUCKZGEB7QG7FI2";

const query =
  "&q=dogs&location.address=charlotte";

https.get(url + token + query, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    console.log(body);
  });
});
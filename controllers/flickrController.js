module.exports = function(app) {

  const https = require("https");

  const url =
    "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=";

  const key =
    "98dbf6130422af315be78a1803dec6e1";

  const tag =
    "&tags=puppy";

  const formatJSON =
    "&format=json&nojsoncallback=1";

  https.get(url + key + tag + formatJSON, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      body = JSON.parse(body);
      console.log(body.photos);
    });
  });

}
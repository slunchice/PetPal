// Variables to build GET request to Flickr API
var flickrUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=";
var flickrKey = "98dbf6130422af315be78a1803dec6e1";
var flickrTag = "&tags=puppy";
var flickrFormatJSON = "&format=json&nojsoncallback=1";
// var flickrAuthToken = "&auth_token=72157693720521961-1755b57971270204";
// var flickrApiSig = "&api_sig=850fbd3cad60d728653c8f366c07eb53";

// Service call to Flickr API
$.get(flickrUrl + flickrKey + flickrTag + flickrFormatJSON, function(res) {
  // console.log(res);
  for (var i = 0; i < 12; i++) {
    var photo = res.photos.photo[i];
    var constructedPhoto = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
     console.log(photo);
    // console.log(constructedPhoto);
    $("#puppies").append("<img style='border: 2px solid black;height:200px;' class='puppy' src='" + constructedPhoto + "'/>");
  }
});
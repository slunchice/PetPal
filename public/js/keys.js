// exporting API keys which are setup in .env file

// Eventbrite key
exports.eventbrite = {
    token = process.env.EVENTBRITE_KEY
};

// Facebook key
exports.facebook = {
    apiKey: process.env.FACEBOOK_KEY,
    messagingSenderId: process.env.FACEBOOK_MESSAGINGSENDERID
}

// Flickr key 
exports.flickr = {
    flickrKey: process.env.FLICKR_KEY
}


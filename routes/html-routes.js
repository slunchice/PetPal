// dependency 
var path = require("path");

// exporting HTML page routes
module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/home.html"));
    });

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/home.html"));
    });
    
    app.get("/photobooth", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/photobooth.html"));
    });

    app.get("/resources", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/resources.html"));
    });

    app.get("/profile", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/profile.html"));
    });

    app.get("/about", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/aboutus.html"));
    });

    app.get("/services", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/services.html"));
    });

};
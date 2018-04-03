module.exports = function(app) {
    // change to different route when we've created one
    app.get("/api/tables", function(req, res) {
        res.json(tableData);
      });
}
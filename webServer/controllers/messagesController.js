(function (messagesController) {

    const baseUrl = "http://localhost:3000";

    messagesController.init = function (app) {

        var http = require("http");

        app.get("/messages", function (req, res) {

            var request = require("request");

            request({
                uri: "/messages",
                baseUrl: baseUrl,
                method: "GET",
                json: true,
                headers: {
                    "user-identifier": "1000"
                }
            }, function (err, response, body) {

                if (err) {
                    console.log(err);

                    res.status(500);
                }
                else {
                    res.render("messages/globalMessages", { messages: body });
                }
            });
        });
    };

})(module.exports)
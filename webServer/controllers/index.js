(function (controllers) {

    controllers.init = function (app) {

        // Adding a line before each requests to make things more readable
        app.all("*", function (req, res, next) {

            console.log("");

            next();
        })

        require("./authenticationController").init(app);
        require("./messagesController").init(app);

        // If request did not match any route, send back a NotFound page
        app.all("*", function (req, res) {

            console.log("User tried to reach a page that does not exist. Returning NotFound page.");

            res.render("notFound");
        })
    }

})(module.exports)
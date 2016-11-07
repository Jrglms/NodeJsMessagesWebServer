(function (authenticationController) {

    authenticationController.init = function (app) {

        app.all("*", function (req, res, next) {

            if (req.session.userIdentifier) {
                next();
            }
            else if (req.query.userIdentifier) {
                req.session.userIdentifier = req.query.userIdentifier;
                next();
            }
            else {
                res.render("login");
            }
        })
    };

})(module.exports)
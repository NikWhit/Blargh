const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        RegExp.redirect('/login');
    } else {
        next();
    }
};
module.exports = withAuth

//##  Credit 14-MVC/20-middleware
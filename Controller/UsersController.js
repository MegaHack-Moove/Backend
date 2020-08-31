const knex = require('./UserController')
const passport = require('./LocalController')

module.exports = {
    async register(req, res) {
    knex
        .from('user')
        .insert({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        })
        .then(() => {
        res.json({ success: true, message: "Data successfully inserted." })
        })
        .catch(() => {
        res.json({ success: false, message: "Error in adding user. Please try again." })
        })
    },

    async handleResponse(res, code, statusMsg) {
        res.status(code).json({ status: statusMsg });
    },

    async login(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
        handleResponse(res, 500, 'error');
        }
        if (!user) {
        handleResponse(res, 404, 'User not found');
        }
        if (user) {
        req.logIn(user, function (err) {
            if (err) {
            handleResponse(res, 500, 'error');
            }
            handleResponse(res, 200, 'success');
        });
        }
    })(req, res, next);
    },
}
const passport = require('./LocalController')
const connection = require('../database/connections')

module.exports = {
    async register(req, res) {
        const { firstname , lastname , email, password } = req.body;
        await connection('users').insert({
            firstname,
            lastname,
            email,
            password
            })
            .then(() => {
            res.json({ success: true, message: "Data successfully inserted." })
            })
            .catch(() => {
            res.json({ success: false, message: "Error in adding user. Please try again." })
        })
    },

    async login(req, res, next) {
        console.log(req)
        console.log(res)
        console.log(next)
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

    async handleResponse(res, code, statusMsg) {
        res.status(code).json({ status: statusMsg });
    }
}
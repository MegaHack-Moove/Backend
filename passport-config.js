const passport = require('passport');
const knex = require('./database/db');

module.exports = () => {

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    knex.from('user').where('id', '=', id)
      .then((user) => { done(null, user); })
      .catch((err) => { done(err, null); });
  });

};
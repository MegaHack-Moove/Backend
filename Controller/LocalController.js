const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('../passport-config');
const knex = require('../database/db');
const utils = require('../utils');

const options = {};

init();

passport.use(new LocalStrategy(options, (email, password, done) => {
  knex('user').where('email', '=', email)
    .then((user) => {
      if (!user) return done(null, false);
      if (!utils.comparePass(password, user.password)) {
        return done(null, false);
      } else {
        return done(null, user);
      }
    })
    .catch((err) => { return done(err); });
}));

module.exports = passport;
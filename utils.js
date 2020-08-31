const bcrypt = require('bcrypt')

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

module.exports = comparePass
const connection = require('../../../shared/database/connection');

class personsRepository {
  async checkPersonEmail(email) {
    return connection('persons').where({ email });
  }
}

module.exports = personsRepository;

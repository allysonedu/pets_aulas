const bcrypt = require('bcrypt');

module.exports = {
  async generateHash(password) {
    const hash = await bcrypt.hash(password, Number(process.env.ENCRYPT_BITS));
    return hash;
  },
};

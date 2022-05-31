const personsRepository = require('../repositories/personsRepository');

module.exports = {
  VerifyPayloadForCreation(request, response, next) {
    const { name, email, whatsapp, password, cep } = request.body;
    if (!name) {
      throw new Error('Name not found');
    }
    if (!email) {
      throw new Error('Email not found');
    }
    if (!whatsapp) {
      throw new Error('whatsapp not found');
    }
    if (!password) {
      throw new Error('password not found');
    }
    if (!cep) {
      throw new Error('cep not found');
    }
    next();
  },
  async verifyifEmailAllreadyExists(request, response, next) {
    const { email } = request.body;

    const emailExists = await personsRepository.checkPersonEmail(email);

    if (!emailExists) throw new Error('Email alredy exists');

    next();
  },
};

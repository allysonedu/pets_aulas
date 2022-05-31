const { Router } = require('express');
const {
  VerifyPayloadForCreation,
  verifyifEmailAllreadyExists,
} = require('../../middleware/persons.middleware');

const PersonsController = require('../controllers/PersonsController');

const personsRoutes = Router();

const personsController = new PersonsController();

personsRoutes.get('/', personsController.getAllPersons);

personsRoutes.post(
  '/',
  VerifyPayloadForCreation,
  verifyifEmailAllreadyExists,
  personsController.createPersons
);

personsRoutes.put('/', personsController.updatePersons);

personsRoutes.delete('/', personsController.deletePersons);

module.exports = personsRoutes;

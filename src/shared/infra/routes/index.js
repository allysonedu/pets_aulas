const { Router } = require('express');

const personsRoutes = require('../../../modules/persons/infra/routes/persons.routes');

const petsRoutes = require('../../../modules/pets/infra/routes/pets.routes');

const transactionsRoutes = require('../../../modules/transactions/infra/routes/transactions.routes');

const routes = Router();

routes.use('/pets', petsRoutes);

routes.use('/persons', personsRoutes);

routes.use('/transactions', transactionsRoutes);

module.exports = routes;

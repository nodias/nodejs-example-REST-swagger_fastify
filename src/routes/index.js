const carController = require('../controllers/car');
const documentaion = require('./documentation/carApi');

const routes = [
    {
        method: 'GET',
        url: '/api/cars',
        handler: carController.getCars
    }, {
        method: 'GET',
        url: '/api/cars/:id',
        handler: carController.getCar
    }, {
        method: 'POST',
        url: '/api/cars',
        handler: carController.addCar,
        schema: documentaion.addCarSchema
    }, {
        method: 'PUT',
        url: '/api/cars/:id',
        handler: carController.updateCar
    }, {
        method: 'DELETE',
        url: '/api/cars/:id',
        handler: carController.deleteCar
    },
];

module.exports = routes;

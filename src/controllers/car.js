const boom = require('boom');
const Car = require('../models/Car');

exports.getCars = async (req, reply) => {
    try {
        return await Car.find()
    } catch (err) {
        throw boom.boomify(err)
    }
};

exports.getCar = async (req, reply) => {
    try {
        const id = req.params.id;
        return await Car.findById(id)
    } catch (err) {
        throw boom.boomify(err)
    }
};

exports.addCar = async (req, reply) => {
    try {
        const car = new Car(req.body);
        return car.save()
    } catch (err) {
        throw boom.boomify(err)
    }
};

exports.updateCar = async (req, reply) => {
    try {
        const id = req.params.id;
        const car = req.body;
        const { ...updateData } = car;
        return await Car.findByIdAndUpdate(id, updateData, {new: true});
    } catch (err) {
        throw boom.boomify(err)
    }
};

exports.deleteCar = async (req, reply) => {
    try {
        const id = req.params.id;
        return await Car.findByIdAndRemove(id)
    } catch (err) {
        throw boom.boomify(err)
    }
};

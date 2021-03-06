const Products = require("../models/modelProducts");
const seq = require("../config/config");
const Sequelize = seq.Sequelize, sequelize = seq.sequelize;

exports.getAll = function(req, res) {
    sequelize.query('select * from Products')
        .then(results => res.json(results[0]))
        .catch(error => res.status(400).json(error));
};

exports.postUpload = function(req, res) {
    Products.findOrCreate({
        where: {id: 0},
        defaults: {
            name: req.body.name,
            price: req.body.price,
            photo: req.body.photo,
            status: req.body.status
        }
    })
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error));
};

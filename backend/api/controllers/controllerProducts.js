const Products = require("../models/modelProducts");
const seq = require("../config/config");
const Sequelize = seq.Sequelize, sequelize = seq.sequelize;

exports.getAll = function(req, res) {
    sequelize.query('select * from Products')
        .then(results => res.json(results[0]))
        .catch(error => res.status(400).json(error));
};

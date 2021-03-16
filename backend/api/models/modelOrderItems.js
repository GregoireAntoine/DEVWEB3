const seq = require("../config/config");
const Sequelize = seq.Sequelize, Model = seq.Model, sequelize = seq.sequelize, DataTypes = seq.DataTypes;
const Orders = require("./modelOrders");
const Products = require("./modelProducts");
class OrderItems extends Model {}

OrderItems.init({
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        eferences: {
            model: Orders,
            key: 'id'
        }
    },
    product_id:{
        type: DataTypes.TEXT,
        allowNull: false,
        references: {
            model: Products,
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'OrderItems',
});

module.exports = OrderItems;

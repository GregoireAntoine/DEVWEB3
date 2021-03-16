const seq = require("../config/config");
const Sequelize = seq.Sequelize, Model = seq.Model, sequelize = seq.sequelize, DataTypes = seq.DataTypes;
const Users = require("./modelUsers");
class Orders extends Model {}

Orders.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id:{
        type: DataTypes.TEXT,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    },
    status:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    time:{
        type: DataTypes.DATE,
        allowNull: false
    },
    datereservation:{
        type: DataTypes.DATE,
        allowNull: false
    },
    created_at:{
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Orders',
});

module.exports = Orders;

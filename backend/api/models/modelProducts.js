const seq = require("../config/config");
const Sequelize = seq.Sequelize, Model = seq.Model, sequelize = seq.sequelize, DataTypes = seq.DataTypes;
class Products extends Model {}

Products.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    photo:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    status:{
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Products',
});

module.exports = Products;

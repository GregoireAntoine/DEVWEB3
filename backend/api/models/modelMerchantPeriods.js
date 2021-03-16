const seq = require("../config/config");
const Sequelize = seq.Sequelize, Model = seq.Model, sequelize = seq.sequelize, DataTypes = seq.DataTypes;
class MerchantPeriods extends Model {}

MerchantPeriods.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    merchant_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    merchantpsw:{
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'MerchantPeriods',
});

module.exports = MerchantPeriods;

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionHeader extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.TransactionDetail, {
        as: 'transactiondetail',
        foreignKey: 'id'
      })

      this.belongsTo(models.Admin, {
        as: 'admin',
        foreignKey: 'adminid'
      })
    }
  }
  TransactionHeader.init({
    adminid: DataTypes.STRING,
    customerid: DataTypes.STRING,
    totalprice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TransactionHeader',
  });
  return TransactionHeader;
};
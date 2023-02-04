'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Admin, {
        as: 'admin',
        foreignKey: 'AdminId'
      })
    }
  }
  Book.init({
    adminid: DataTypes.STRING,
    namebook: DataTypes.STRING,
    descbook: DataTypes.STRING,
    pricebook: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  let books = [];
  return Book;
};
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate({ }) {
      // define association here
      // this is associated with userId in posts table
    }
  };

  User.init({

    name: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: { msg: 'Name can not be null' },
        notEmpty: { msg: 'Please enter the name' }
      }
    },
    username: {
      type: DataTypes.STRING, allowNull: false, unique: true,
      validate: {
        notNull: { msg: 'Userame can not be null' },
        notEmpty: { msg: 'Please enter the username' }
      }
    },
    email: {
      type: DataTypes.STRING, allowNull: false, unique: true,
      validate: {
        notNull: { msg: 'Email can not be null' },
        notEmpty: { msg: 'Please enter the email' },
        isEmail: {msg: 'Please enter valid email address or email already in use'}
      }
    },
    dateofbirth:{
      type: DataTypes.DATE, allowNull: false, unique: false,
      validate: {
        notNull: { msg: 'Date of birth can not be null' },
        notEmpty: { msg: 'Please enter the Date of birth' }
      }
    },
    country: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: { msg: 'Country can not be null' },
        notEmpty: { msg: 'Please enter the Country' }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};
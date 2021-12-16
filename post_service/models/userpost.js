'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPost extends Model {

    static associate() {
      // define association here
    }
  };
  UserPost.init({
    postId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    userId: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      validate: {
        isInt: { msg: 'userId can not be null' },
        notNull: { msg: 'UserId can not be null' },
        notEmpty: { msg: 'Please enter the userId' }
      }
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postImage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postVideo: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'UserPost',
    tableName: 'userPosts'
  });
  return UserPost;
};
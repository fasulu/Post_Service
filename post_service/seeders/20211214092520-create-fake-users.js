'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users',
      [
        {
          name: 'fasulu',
          email: 'fas@bemail.com',
          username: 'fas',
          dateofbirth: '1947-12-05',
          country: 'drc',
          createdAt: '2021-12-08 11:25:02.000',
          updatedAt: '2021-12-08 11:25:02.000',
      },
      {
          name: 'shahi',
          email: 'shahi@bemail.com',
          username: 'shahi',
          dateofbirth: '2000-01-08',
          country: 'russia',
          createdAt: '2000-12-08 15:27:35.000',
          updatedAt: '2021-12-08 15:30:35.000',
      },
      {
          name: 'ray',
          email: 'ray@bemail.com',
          username: 'ray',
          dateofbirth: '2010-02-07',
          country: 'usa',
          createdAt: '2011-12-08 16:28:35.000',
          updatedAt: '2021-12-08 16:31:35.000',
      },
      {
          name: 'shaha',
          email: 'shaha@bemail.com',
          username: 'shaha',
          dateofbirth: '2020-03-03',
          country: 'india',
          createdAt: '2021-12-08 16:28:35.000',
          updatedAt: '2021-12-08 16:31:35.000',
      }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});
  }
};

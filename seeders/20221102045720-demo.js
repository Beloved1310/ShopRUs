'use strict';


const Sequelize = require('../database/Sequelize')

module.exports = {
  up: async (queryInterface, sequelize) => {
    await queryInterface.createTable(
      'Customer',
      [
        {
          id: 1,
          name: 'user1',
          role: 'user1@test.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'user2',
          role: 'user2@test.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'user3',
          role: 'user3@test.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.createTable(
      'Discount',
      [
        {
          id: 1,
          discountType: 'channel1',
          discountValue: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          discountType: 'channel2',
          discountValue: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.createTable(
      'Invoice',
      [
        {
          id: 1,
          products: "yam",
          customerId: {
            id: 1,
            name: "piggy",
            role: "afflilate",
            createdAt: "2022-11-02T17:22:02.032Z",
            updatedAt: "2022-11-02T17:22:02.032Z",
          },
          createdAt: "2022-11-02T17:22:02.032Z",
          updatedAt: "2022-11-02T17:22:02.032Z",
        },
        {
          id: 2,
          products: "cassava",
          customerId: {
            id: 2,
            name: "fiigy",
            role: "employee",
            createdAt: "2022-11-02T17:22:02.032Z",
            updatedAt: "2022-11-02T17:22:02.032Z",
          },
          createdAt: "2022-11-02T17:26:25.359Z",
          updatedAt: "2022-11-02T17:26:25.359Z",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('channel', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('video', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('user', null, bulkDeleteOptions);
  },
};
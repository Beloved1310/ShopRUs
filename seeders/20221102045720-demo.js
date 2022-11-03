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
          title: 'video1ByUser1',
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          title: 'video2ByUser1',
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          title: 'video3ByUser2',
          channel_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
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
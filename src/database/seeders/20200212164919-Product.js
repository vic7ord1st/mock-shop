'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Products', [{
        name: 'Mattress',
        description: 'a typical Mattress',
        category: 'Mobile Phones',
        price: 100.4,
        imageUrl: 'https://www.pexels.com/photo/236010/download/?search_query=milk&tracking_id=ax6wvs5xx0l',
        inStock: true,
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Products', null, {});
  }
};

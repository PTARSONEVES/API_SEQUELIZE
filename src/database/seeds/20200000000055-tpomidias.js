'use strict';


/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkInsert(
      "tpomidias", [
        {
          namemidia: 'Facebook',
        },
        {
          namemidia: 'WhatsApp',
        },
        {
          namemidia: 'LinkedIn',
        },
        {
          namemidia: 'Instagram',
        },
        {
          namemidia: 'Telegram',
        },
        {
          namemidia: 'Twitter/X',
        },
        {
          namemidia: 'YouTube',
        },
        {
          namemidia: 'TikTok',
        },
        {
          namemidia: 'Pinterest',
        },
        {
          namemidia: 'Snapchat',
        },
        {
          namemidia: 'Reddit',
        },
        {
          namemidia: 'Tumblr',
        },
    ]);
  },

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkDelete('tpomidias', null, {});
  }
};

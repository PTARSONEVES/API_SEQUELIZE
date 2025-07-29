'use strict';


/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkInsert(
      "pessoatpos", [
        {
          tipopessoa: 'Fisica',
        },
        {
          tipopessoa: 'Juridica',
        },
    ]);
  },

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkDelete('pessoatpos', null, {});
  }
};

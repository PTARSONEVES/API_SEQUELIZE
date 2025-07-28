'use strict';


/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkInsert(
      "tpopessoas", [
        {
          tipopessoa: 'Fisica',
        },
        {
          tipopessoa: 'Juridica',
        },
    ]);
  },

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkDelete('tpopessoas', null, {});
  }
};

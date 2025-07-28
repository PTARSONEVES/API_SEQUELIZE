'use strict';


/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up (queryInterface/*, Sequelize*/) {
    for(let i = 1; i < 13; i++) {
      await queryInterface.bulkInsert(
        "midias", [
          {
            pessoaid: 1,
            tpomidiaid: i,
          },
          {
            pessoaid: 2,
            tpomidiaid: i,
          },
      ]);
    }
    for(let i = 3; i < 13; i++) {
      const midias = Math.ceil(Math.random()*12);
      if(midias === 0) {
        continue;
      } else {
        if(midias === 13) {midias=12;}
        for(let j = 1; j < midias + 1; j++) {
          // eslint-disable-next-line no-await-in-loop
          await queryInterface.bulkInsert(
            "midias", [
              {
                pessoaid: i,
                tpomidiaid: j,
              },
          ]);
        }
      }
    }
  },

  async down (queryInterface/*, Sequelize*/) {
    await queryInterface.bulkDelete('midias', null, {});
  }
};

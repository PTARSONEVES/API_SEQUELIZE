import Sequelize, { Model } from 'sequelize';

export default class Midia extends Model {

  static init(sequelize) {
    super.init(
      {
        pessoaid: {
          type: Sequelize.INTEGER,
          defaultValue: null,
        },
        tpomidiaid: {
          type: Sequelize.INTEGER,
          defaultValue: null,
        },
     },
      {
        sequelize,
        underscored: false,
      },
    );

  }

 static associate(models) {
    this.belongsTo(models.Pessoa, {
      foreignKey: 'pessoaid',
    });
    this.belongsTo(models.Tpomidia, {
      foreignKey: 'tpomidiaid',
    });
  }
}


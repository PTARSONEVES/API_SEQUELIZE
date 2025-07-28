import Sequelize, { Model } from 'sequelize';

export default class Tpopessoa extends Model {
  static init(sequelize) {
    super.init({
      tipopessoa: {
        type: Sequelize.STRING(35),
        allowNull: false,
      },
    }, {
      sequelize,
      underscored: false,
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Pessoa, {
      foreignKey: 'tpopessoaid'
    });
  }

}


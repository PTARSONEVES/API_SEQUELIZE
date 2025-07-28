import Sequelize, { Model } from 'sequelize';

export default class Pessoa extends Model {
  static init(sequelize) {
    super.init({
      nomepessoa: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 200],
            msg: 'BACK - Campo senha deve ter entre 6 e 200 caracteres',
          },
        },
      },
      tpopessoaid: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      cpfpessoa: {
        type: Sequelize.STRING,
        defaultValue: null,
        validate: {
          len: {
            args: [11],
            msg: 'BACK - Campo cpf deve ter 11 caracteres',
          },
        },
      },
      cnpjpessoa: {
        type: Sequelize.STRING,
        defaultValue: null,
        validate: {
          len: {
            args: [14],
            msg: 'BACK - Campo cpf deve ter 14 caracteres',
          },
        },
      },
      nascpessoa: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      underscored: false,
    });

    return this;
  }

    static associate(models) {
    this.belongsTo(models.Tpopessoa, {
      foreignKey: 'tpopessoaid'
    });
    this.hasMany(models.Email), {
      foreignKey: 'pessoaid'
    };
    this.hasMany(models.Midia, {
      foreignKey: ['pessoaid'],
      sourceKey: 'id',
    });
  }

}


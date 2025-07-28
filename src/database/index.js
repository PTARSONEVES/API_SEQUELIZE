import Sequelize from 'sequelize';
import databaseConfig from '..//config/database';

//Models
// referências
import Tpomidia from '../models/referencias/Tpomidia';
//pessoa
import Tpopessoa from '../models/pessoa/Tpopessoa';
import Pessoa from '../models/pessoa/Pessoa';
import Email from '../models/pessoa/Email'
import Midia from '../models/pessoa/Midia';


const models = [
  Tpopessoa,
  Pessoa,
  Email,
  Midia,
  Tpomidia,
];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

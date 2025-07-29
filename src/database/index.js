import Sequelize from 'sequelize';
import databaseConfig from '..//config/database';

//Models
// referências
import Midiatpo from '../models/referencias/Midiatpo';
//pessoa
import Pessoatpo from '../models/pessoa/Pessoatpo';
import Pessoa from '../models/pessoa/Pessoa';
import Email from '../models/pessoa/Email'
import Midia from '../models/pessoa/Midia';


const models = [
  Pessoatpo,
  Pessoa,
  Email,
  Midia,
  Midiatpo,
];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

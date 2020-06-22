import Sequelize from 'sequelize';

import User from '../app/models/User';
import Cliente from '../app/models/Cliente';
import Pedido from '../app/models/Pedido';
import Restaurante from '../app/models/Restaurante';


import databaseConfig from '../config/database';
import Produtos from '../app/models/Produtos';


const models = [User, Cliente, Pedido, Restaurante, Produtos];

class Database {
  constructor() {
    this.init(); 
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();

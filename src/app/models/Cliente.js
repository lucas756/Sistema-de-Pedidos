import Sequelize, { Model } from 'sequelize';


class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        endereço: Sequelize.STRING,
        telefone: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default Cliente;

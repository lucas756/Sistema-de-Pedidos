import Sequelize, { Model } from 'sequelize';


class Restaurante extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default Restaurante;

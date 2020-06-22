import Sequelize, { Model } from 'sequelize';


class Pedidos extends Model {
  static init(sequelize) {
    super.init(
      {
        restaurante_id: Sequelize.INTEGER,
        cliente_id: Sequelize.INTEGER,
        descricao_pedido: Sequelize.STRING,
        situacao: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: 'cliente_id', as: 'cliente' });
  }
}
export default Pedidos;

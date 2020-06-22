module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('clientes', 'pedido_id', {
      type: Sequelize.INTEGER,
      references: { model: 'pedidos', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('clientes', 'pedido_id');
  },
};

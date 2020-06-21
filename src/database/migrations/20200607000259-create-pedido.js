module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pedidos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      restaurante_id: {
        type: Sequelize.INTEGER,
        references: { model: 'restaurantes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        references: { model: 'clientes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      descricao_pedido: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      situacao: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('pedidos');
  },
};

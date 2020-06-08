module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      endereço: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      restaurante_id: {
        type: Sequelize.INTEGER,
        references: { model: 'restaurante', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    return queryInterface.dropTable('clientes');
  },
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false,
        unique: false
      },
      preco: {
        type: Sequelize.FLOAT,
        defaultValue: false,
        allowNull: false,
        unique: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      restaurante_id: {
        type: Sequelize.INTEGER,
        references: { model: 'restaurantes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
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
    return queryInterface.dropTable('produtos');
  },
};

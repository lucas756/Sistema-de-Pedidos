module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('restaurantes', {
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
      endereco_empresa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cnpj_empresa: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      telefone_fixo_empresa: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      telefone_movel_empresa: {
        type: Sequelize.STRING,
        allowNull: false,
      },     
      nome_dono_empresa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf_dono_empresa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      endereco_dono_empresa: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      telefone_fixo_dono_empresa: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      telefone_movel_dono_empresa: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      email_empresa: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      senha_empresa: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('restaurantes');
  },
};

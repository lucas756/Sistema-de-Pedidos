import Sequelize, { Model } from 'sequelize';


class Restaurante extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        endereco_empresa: Sequelize.STRING,
        cnpj_empresa: Sequelize.STRING,
        telefone_fixo_empresa: Sequelize.STRING,
        telefone_movel_empresa: Sequelize.STRING,
        nome_dono_empresa: Sequelize.STRING,
        cpf_dono_empresa: Sequelize.STRING,
        endereco_dono_empresa: Sequelize.STRING,
        telefone_fixo_dono_empresa: Sequelize.STRING,
        telefone_movel_dono_empresa: Sequelize.STRING,
        email_empresa: Sequelize.STRING,
        senha_empresa: Sequelize.STRING
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default Restaurante;

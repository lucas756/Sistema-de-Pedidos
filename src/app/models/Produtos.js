import Sequelize, { Model } from 'sequelize';


class Produtos extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                preco: Sequelize.STRING,
                descricao: Sequelize.STRING,
                restaurante_id: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );
        return this;
    }
}
export default Produtos;

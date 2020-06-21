import * as Yup from 'yup';
import Produtos from '../models/Produtos'
import User from '../models/User';
import Session from './SessionController'

class ProdutoController {
    async criarPedido(req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            preco: Yup.number().required(),
            descricao: Yup.string().required(),
            restaurante_id: Yup.number().required(),
        });

        let idUser = await User.findOne({
            where: {
                id: req.userId
            }
        })
        let prod = {
            nome: req.body.name,
            preco: Number(req.body.preco),
            descricao: req.body.descricao,
            restaurante_id: idUser.dataValues.restaurante_id
        }

        console.log(prod)
        if (!(await schema.isValid(prod))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        await Produtos.create(prod)

        return res.json("Produto cadastrado com sucesso!")
    }

    async buscarProdutos(req, res) {
        const { page = 1 } = req.query
        let idUser = await User.findOne({
            where: {
                id: req.userId
            }
        }) 

        let produtos = await Produtos.findAll({
            where: {
                restaurante_id: idUser.dataValues.restaurante_id
            },
            limit: 20,
            offset: (page - 1) * 20
        })

        return res.json(produtos)
    }
}
export default new ProdutoController();
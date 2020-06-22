import * as Yup from 'yup';
import Pedido from '../models/Pedido';
import Cliente from '../models/Cliente';
import User from '../models/User';


class PedidoController {
  async store(req, res) {
    const schema = Yup.object().shape({
      restaurante_id: Yup.number(),
      cliente_id: Yup.number().required(),
      descricao_pedido: Yup.string().required(),
      situacao: Yup.boolean(),
    });


    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }  

    const user = await User.findOne({
      where: {
        id: req.userId
      }
    });
    req.body.restaurante_id = user.dataValues.restaurante_id.toString();

    if(user.dataValues.restaurante_id != req.body.restaurante_id){
      return res.status(404).json({error: 'Você nao pode fazer isso'});
    }

    const { id, restaurante_id, cliente_id, descricao_pedido, situacao } = await Pedido.create(req.body);

    return res.json({
      id,
      restaurante_id,
      cliente_id,
      descricao_pedido,
      situacao,
    });
  }

  async index(req, res) {

    const user = await User.findOne({
      where: {
        id: req.userId
      }
    });

    


    const { page = 1 } = req.query;
    const pedidos = await Pedido.findAll({
       where: { restaurante_id: user.dataValues.restaurante_id, situacao: false },
      attributes: [
        'id',
        'restaurante_id',
        'descricao_pedido',
        'situacao',
      ],
      include: [
        {
          model: Cliente,
          as: 'cliente',
          attributes: ['id', 'name', 'endereço', 'telefone', 'restaurante_id'],
        },
      ],
      limit: 20,
      offset: (page - 1) * 20,
    })

    
    return res.json(pedidos);
  }

  async update(req, res) {
    const pedidos = await Pedido.findByPk(req.params.id);

    if (pedidos.situacao === true) {
      return res.status(401).json({ Error: 'o pedido já está pronto' })
    }

    pedidos.situacao = true;

    await pedidos.save();

    return res.json(pedidos);
  }


  async show(req, res) {
    const pedidos = await Pedido.findOne({
      where:{ id: req.params.id},
      attributes: [
        'id',
        'restaurante_id',
        'descricao_pedido',
        'situacao',
      ],
      include: [
        {
          model: Cliente,
          as: 'cliente',
          attributes: ['id', 'name', 'endereço', 'telefone', 'restaurante_id'],
        },
      ],
    });

    return res.json(pedidos);
  }
}

export default new PedidoController();
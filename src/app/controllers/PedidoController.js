import * as Yup from 'yup';
import Pedido from '../models/Pedido';
import Cliente from '../models/Cliente';
import User from '../models/User';


class PedidoController {
  async store(req, res) {
    const schema = Yup.object().shape({
      restaurante_id: Yup.number().required(),
      cliente_id: Yup.number().required(),
      descricao_pedido: Yup.string().required(),
      situacao: Yup.boolean(),
    });


    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
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
    const pedidos = await Pedido.findAll({
        where: { restaurante_id: req.userId, situacao: false }
    })
    return res.json(pedidos);
  }

  async update(req, res){
    const pedidos = await Pedido.findByPk(req.params.id);

    if(pedidos.situacao === true) {
      return res.status(401).json({Error: 'o pedido já está pronto'})
    }  
    
    
    pedidos.situacao = true;

    await pedidos.save();

    return res.json(pedidos);
  }
}

  export default new PedidoController();
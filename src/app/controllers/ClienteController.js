import * as Yup from 'yup';
import Cliente from '../models/Cliente';
import User from '../models/User';
import Restaurante from '../models/Restaurante';

class ClienteController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      endereço: Yup.string().required(),
      telefone: Yup.string().required(),
    });


    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const user = await User.findOne({where: { id: req.userId }});

    const clienteExists = await Cliente.findOne({ where: { telefone: req.body.telefone, restaurante_id: user.restaurante_id } });

    if (clienteExists) {
      return res.json(clienteExists);
    }

    const user_restaurante = await User.findOne({
      where: {
        id: req.userId
      }
    });
    req.body.restaurante_id = user_restaurante.dataValues.restaurante_id.toString();

    

    const { id, name, endereço, telefone } = await Cliente.create(req.body);
    
    

    return res.json({
      id,
      name,
      endereço,
      telefone,
    });
  }

  async index(req, res) {
    const { name, page = 1 } = req.query;

    const restaurantes = await User.findOne({
      where: {
        id: req.userId
      }
    });

    console.log(restaurantes.dataValues.restaurante_id, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');



    

    const clientes = await Cliente.findAll({
      where: {
        restaurante_id: restaurantes.dataValues.restaurante_id
      },
      attributes: ['id', 'name'],
      limit: 20,
      offset: (page - 1) * 20,
    });
    

    return res.json(clientes);
  }
}

  export default new ClienteController();
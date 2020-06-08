import * as Yup from 'yup';
import Cliente from '../models/Cliente';
import User from '../models/User';

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

    const { id, name, endereço, telefone } = await Cliente.create(req.body);

    return res.json({
      id,
      name,
      endereço,
      telefone,
    });
  }
}

  export default new ClienteController();
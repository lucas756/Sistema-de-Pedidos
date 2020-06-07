import * as Yup from 'yup';
import Cliente from '../models/Cliente';


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

    const clienteExists = await Cliente.findOne({ where: { telefone: req.body.telefone } });

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
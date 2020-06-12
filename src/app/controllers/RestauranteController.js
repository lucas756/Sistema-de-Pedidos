import * as Yup from 'yup';
import Restaurante from '../models/Restaurante';
import User from '../models/User';


class RestauranteController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      endereco_empresa: Yup.string().required(),
      cnpj_empresa: Yup.string().required(),
      telefone_fixo_empresa: Yup.string().required(),
      telefone_movel_empresa: Yup.string().required(),
      nome_dono_empresa: Yup.string().required(),
      cpf_dono_empresa: Yup.string().required(),
      endereco_dono_empresa: Yup.string().required(),
      telefone_fixo_dono_empresa: Yup.string().required(),
      telefone_movel_dono_empresa: Yup.string().required(),
      email_empresa: Yup.string().required(),
      senha_empresa: Yup.string().required(),
    });


    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }


    const {
      name,
      id,
      email_empresa,
      senha_empresa
    } = await Restaurante.create(req.body);

    const formUsuario = {
      name,
      email: email_empresa,
      password: senha_empresa,
      adm: true,
      restaurante_id: id
    }

    await User.create(formUsuario);

    return res.json({
      id,
      name,
      email_empresa,
      senha_empresa,
    });
  }
}

export default new RestauranteController();
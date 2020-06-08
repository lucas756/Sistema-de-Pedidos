import * as Yup from 'yup';
import Restaurante from '../models/Restaurante';
import User from '../models/User';



class RestauranteController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    
    const user = await User.findOne({where: { id: req.userId }});

    if(user.adm === false){
      return res.status(401).json({Error: 'Você precisa ser um adm para cadastrar um restaurante'});
    }
    

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name } = await Restaurante.create(req.body);

    return res.json({
      name,
    });
  }
}

  export default new RestauranteController();
import jwt from 'jsonwebtoken';
import user from "../models/User.js";

class LoginController {

  static login = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    user.findOne({ email, password }, (err, login) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - erro ao buscar usuário.` });
      }

      if (login && login.status) {
<<<<<<< HEAD
        return res.status(200).send(this.generateToken(login));
        
      }
      return res.status(400).send("Usuário/senha inválido.");
=======
        res.status(200).send(this.generateToken(login));
        return;
      }
      res.status(400).send("Usuario/senha inválido.");
>>>>>>> e1f62f231ef70c93d71222e058d633a2dd3d2cb6
    });
  };

  static generateToken(user) {
    const payload = {
      id: user._id,
      name: `${user.firstname} ${user.lastname}`,
      email: user.email,
      role: user.role
    };

    const token = jwt.sign(payload, 'segredo_do_token', { expiresIn: '1h' });
    return token;
  }

}

export default LoginController;

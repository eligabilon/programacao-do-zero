import users from "../models/User.js";

class UserController {
  static findUsers = (req, res) => {
    users.find((err, users) => {
      res.status(200).send(users);
    });
  };

  static findUserId = (req, res) => {
    let id = req.params.id;

    users.findById(id, (err, users) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - nao encontrou o usuario` });
      } else {
        res.status(200).send(users);
      }
    });
  };

  static addUser = (req, res) => {
    let user = new users(req.body);

    user.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar o usuario` });
      } else {
        res.status(201).send(user.toJSON());
      }
    });
  };

  static updateUser = (req, res) => {
    let id = req.params.id;

    users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Usuario atualizado" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao atualizar o usuario` });
      }
    });
  };

  static deleteUser = (req, res) => {
    let id = req.params.id;

    users.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Usuario removido" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao remover o usuario` });
      }
    });
  };
}

export default UserController;

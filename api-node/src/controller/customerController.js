import customers from "../models/Customer.js";

class CustomerController {
  static buscarCustomers = (req, res) => {
    customers.find((err, customers) => {
      res.status(200).send(customers);
    });
  };

  static buscarCustomerId = (req, res) => {
    let id = req.params.id;

    customers.findById(id, (err, customers) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - nao encontrou o usuario` });
      } else {
        res.status(200).send(customers);
      }
    });
  };

  static cadastrarCustomer = (req, res) => {
    let customer = new customers(req.body);

    customer.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar o usuario` });
      } else {
        res.status(201).send(customer.toJSON());
      }
    });
  };

  static atualizarCustomer = (req, res) => {
    let id = req.params.id;

    customers.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao atualizar o usuario` });
      } else {
        res.status(200).send({ message: "Usuario atualizado" });        
      }
    });
  };

  static deletarCustomer = (req, res) => {
    let id = req.params.id;

    customers.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao remover o usuario` });
      } else {
        res.status(200).send({ message: "Usuario removido" });
      }
    });
  };
}

export default CustomerController;

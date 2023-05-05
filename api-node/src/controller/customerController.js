import customers from "../models/Customer.js";
import users from "../models/User.js";

class CustomerController {
  static findCustomers = (req, res) => {
    customers.find((err, customers) => {
      res.status(200).send(customers);
    });
  };

  static findCustomerId = (req, res) => {
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

  static findCustomerIdMoreChurch = (req, res) => {
    let id = req.params.id;
    
    customers
      .findById(id)
      .populate("church")
      .exec({}, (err, customers) => {    
        res.status(200).send(customers);
      });
  };

  static addCustomer = (req, res) => {
    let customer = new customers(req.body);

    customer.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao add o usuario` });
      } else {
        res.status(201).send(customer.toJSON());
        this.addUserWithCustomer(this.mountObj(customer));
      }
    });
  };

  static addUserWithCustomer = (customer) => {
    let user = new users(customer);

    try {
      user.save();
    } catch (err) {
      err.status(500).send(`${err.message} - falha ao cadastrar o usuario`);
    }
  };

  static mountObj = (req) => {
    return {
      status: req.membership,
      firstname: req.firstname,
      email: req.email,
      password: req.email,
      owner_user: req.owner_user,
    };
  };

  static updateCustomer = (req, res) => {
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

  static deleteCustomer = (req, res) => {
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

  static findCustomerForChurch = (req, res) => {
    const common = req.query.common;
    
    customers
      .find({ common: common })
      .populate("church")
      .exec({}, (err, customers) => {
        res.status(200).send(customers);
      });
  };
}

export default CustomerController;

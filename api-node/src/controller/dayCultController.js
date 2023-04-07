import daysCults from "../models/DaysCults.js";

class DayCultController {
  static findDayCults = (req, res) => {
    daysCults.find((err, daysCults) => {
      res.status(200).send(daysCults);
    });
  };

  static findDayCultId = (req, res) => {
    let id = req.params.id;

    daysCults.findById(id, (err, daysCults) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - nao encontrou o usuario` });
      } else {
        res.status(200).send(daysCults);
      }
    });
  };

  static addDayCult = (req, res) => {
    let dayCult = new daysCults(req.body);

    dayCult.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao add o usuario` });
      } else {
        res.status(201).send(dayCult.toJSON());
      }
    });
  };

  static updateDayCult = (req, res) => {
    let id = req.params.id;

    daysCults.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao atualizar o usuario` });
      } else {
        res.status(200).send({ message: "Usuario atualizado" });        
      }
    });
  };

  static deleteDayCult = (req, res) => {
    let id = req.params.id;

    daysCults.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao remover o usuario` });
      } else {
        res.status(200).send({ message: "Usuario removido" });
      }
    });
  };
   
  static findOrganistForDayCult= (req, res) => {
    const firstname = req.query.firstname;
    daysCults.find({'firstname': firstname})
    .populate('customer')
    .exec({}, (err, daysCults ) => {
        res.status(200).send(daysCults);
    })    
}
}

export default DayCultController;

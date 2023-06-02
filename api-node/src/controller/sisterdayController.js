import sisterday from "../models/Sisterday.js";

class SisterdayController {

    static findSisterday = (req, res) => {
        sisterday.find()    
        .exec((err, sisterday)=>{
            res.status(200).send(sisterday);
        })
    }

    static findSisterdayId = (req, res) => {
        let id = req.params.id;
        
        sisterday.findById(id)
        .exec((err, sisterday) => {
            if(err){
                res.status(400).send({message: `${err.message} - nao encontrou irmã, tente outra vez`})
            } else {
                res.status(200).send(sisterday)
            }       
        })        
    }

    static addSisterday = (req, res) => {
        let sisterday = new sisterday(req.body);

        sisterday.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao add irmã`})
            } else {
                res.status(201).send(sisterday.toJSON())
            }
        })
    }

    static updateSisterday = (req, res) => {
        let id = req.params.id;
        
        sisterday.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Cadastro atualizado'})
            } else {
                res.status(500).send({message: `${err.message} - falha ao atualizar cadastro`})
            }
        })       
    }

    static deleteSisterday = (req, res) => {
        let id = req.params.id;
        
        sisterday.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Irmã removida'})
            } else {
                res.status(500).send({message: `${err.message} - falha ao remover Irmã`})
            }
        })       
    }
}

export default SisterdayController;